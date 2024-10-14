import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import TimePassedComponent from "./timepassedcomponent";
import ResponseList from "./responselist";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from './context';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

const ProfileList = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId'); // 從查詢參數中獲取 userId

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [users, setUsers] = useState([]);
    const [openComments, setOpenComments] = useState({});
    const [likedPosts, setLikedPosts] = useState([]);
    const [commentContent, setCommentContent] = useState("");
    const { avatar } = useContext(UserContext); // 使用 useContext 來獲取 此用者相片

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
            const response = await axios.get(`${BASE_URL}/posts/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}` // 添加 Authorization header
                },
                params: {
                    page: page,
                    size: 10
                }
            });
            console.log("Fetched posts:", response.data);  // 查看 response.data 的結構

            setPosts([...posts, ...response.data]);  // Append new posts

            if (response.data.length < 10) {
                setHasMore(false);  // 如果返回的數據少於 10 條，則認為沒有更多數據
            }

            // Fetch user details for the new responses
            const userIds = response.data.map(resp => resp.userId);
            fetchUsers(userIds);
        } catch (error) {
            console.error("Failed to load posts", error);
        }
    };

    // Fetch user data based on userIds and update the state
    const fetchUsers = async (userIds) => {
        try {
            const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
            const fetchedUsers = {};
            await Promise.all(userIds.map(async (id) => {
                if (!users[id]) {  // Avoid refetching already loaded users
                    const response = await axios.get(`${BASE_URL}/api/auth/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    fetchedUsers[id] = response.data;
                }
            }));
            setUsers((prevUsers) => ({ ...prevUsers, ...fetchedUsers }));
        } catch (error) {
            console.error("fetchUsers: " + error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [page]); // 當頁數改變時重新獲取帖子


    const toggleComments = (postId) => {
        setOpenComments(prev => ({
            ...prev,
            [postId]: !prev[postId]
        })); // hide : show
    }

    const handleAddComment = async (postId) => {
        if (!commentContent.trim()) {
            alert("回覆內容不能為空");
            return;
        }
        try {
            const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
            const response = await axios.post(`http://localhost:8080/responses/${postId}`, {
                content: commentContent,
                userId: userId // 添加 userId
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCommentContent(""); // 清空輸入框
            // TODO: 更新回覆列表或重新加載回覆
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    }

    // Function to reset the page to 0
    const resetPageOnBack = () => {
        setPage(0);
    };

    useEffect(() => {
        // Listen for popstate event (browser back/forward navigation)
        const handlePopState = () => {
            resetPageOnBack();
        };

        window.addEventListener('popstate', handlePopState);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const addLike = async (postId) => {
        try {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error("User ID not found in localStorage");
                return;
            }
            console.log("type of userId: " + typeof userId);
            const response = await axios.put(`http://localhost:8080/posts/${postId}/like`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'userId': userId
                }
            });

            console.log(response);

            setLikedPosts([...likedPosts, postId]);
        } catch (error) {
            console.error("addLike: " + error);
        }
    }

    const removeLike = async (postId) => {
        try {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const response = await axios.delete(`http://localhost:8080/posts/${postId}/unlike`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'userId': userId
                }
            });

            console.log(response);

            setLikedPosts(likedPosts.filter(id => id !== postId));
        } catch (error) {
            console.error("removeLike: " + error);
        }
    }

    const handleLike = (postId) => {
        if (likedPosts.includes(postId)) {
            removeLike(postId);
        } else {
            addLike(postId);
        }
    }

    useEffect(() => {
        console.log(likedPosts);
    }, [likedPosts]);

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={() => setPage(page + 1)}  // Load next page
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p className="text-secondary text-center pt-5 pb-3">No more posts</p>}
        >
            <h6 className="timeline-title">Posts</h6>
            {posts.map((post) => (
                <div key={post.postId}>
                    <div className="post border-bottom p-3 bg-white w-shadow" >
                        <div className="media text-muted pt-3">
                            <Link to={`/profile?userId=${post.userId}`} className="d-flex flex-row">
                                {users[post.userId] ? (
                                    <img
                                        src={users[post.userId].imagePath}
                                        alt="Online user"
                                        className="mr-3 post-user-image"
                                    />) : (
                                    <p>Loading user data...</p>
                                )}
                                <div className="media-body pb-3 mb-0 small lh-125">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <a to={`/profile?userId=${post.userId}`} className="h5 text-gray-dark post-user-name">
                                            {post.nickname}
                                        </a>

                                    </div>
                                    <span className="d-block">
                                        <TimePassedComponent updateAt={post.updateAt} /> ago, {post.updateAt}<i className="bx bx-globe ml-3" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-3">
                            <p>
                                {post.content}
                            </p>
                        </div>
                        <div className="d-block mt-3">
                            {post.imagePath ?
                                <img
                                    src={post.imagePath}
                                    className="post-content"
                                    alt="   "
                                    style={{ display: post.imagePath === "" ? "none" : "block" }}
                                /> : (
                                    <pre></pre>
                                )}
                        </div>
                        <div className="mb-3">

                            <div className="argon-reaction">
                                <span className="like-btn" onClick={() => handleLike(post.postId)}>
                                    {
                                        likedPosts.includes(post.postId) ? (
                                            <a className="post-card-buttons" id="reactions">
                                                <i className="bx bxs-like mr-2" /> {post.likes + 1}
                                            </a>
                                        ) : (
                                            <a className="post-card-buttons" id="reactions">
                                                <i className="bx bxs-like mr-2" /> {post.likes}
                                            </a>
                                        )
                                    }
                                    <ul className="dropdown-shadow">
                                        <li
                                            className="reaction reaction-like-edited"
                                            data-reaction="Like"
                                        />
                                    </ul>
                                </span>
                            </div>
                            <a
                                href="javascript:void(0)"
                                className="post-card-buttons"
                                id="show-comments"
                            >
                                <i className="bx bx-message-rounded mr-2" /> {post.commentCount || 0}
                            </a>
                            <div className="dropdown dropup share-dropup">
                                <a
                                    href="#"
                                    className="post-card-buttons"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="bx bx-share-alt mr-2" /> Share
                                </a>

                            </div>
                        </div>
                        <div className="media-body">
                            <div className="comment-see-more">
                                <div className="h6 text-secondary text-center" style={{ cursor: 'pointer' }} onClick={() => toggleComments(post.postId)}>
                                    <hr></hr>
                                    {openComments[post.postId] ? 'Hide Comments' : 'See Comments'}
                                </div>
                                {openComments[post.postId] && (
                                    <div className="px-3">
                                        <hr></hr>
                                        <div className="row justify-content-start mb-3 media">
                                            <a href="#" className="pull-left">
                                                <Link to="/profile">
                                                    <img
                                                        src={avatar}
                                                        alt="User Avatar"
                                                        className="comment-user-img"
                                                    />
                                                </Link>
                                            </a>
                                            <div className="media-body">
                                                <form action="" method="" role="form" onSubmit={(e) => { e.preventDefault(); handleAddComment(post.postId); }}>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control comment-input"
                                                                    placeholder="Write a comment..."
                                                                    value={commentContent}
                                                                    onChange={(e) => setCommentContent(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <ResponseList postId={post.postId} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </InfiniteScroll>
    );
};

export default ProfileList;
