import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { avatarProvider } from "./avatarProvider";
import TimePassedComponent from "./timepassedcomponent";
import ResponseList from "./responselist";
import { Link, useLocation } from "react-router-dom";


const ProfileList = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId'); // 從查詢參數中獲取 userId

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [openComments, setOpenComments] = useState({});
    const [users, setUsers] = useState([]);

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
            const response = await axios.get(`http://localhost:8080/posts/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}` // 添加 Authorization header
                },
                params: {
                    page: page,
                    size: 10
                }
            });
            console.log("Fetched posts:", response.data);  // 查看 response.data 的結構

            console.log(response);
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
                console.log("userIds: ");
                console.log(userIds);
                if (!users[id]) {  // Avoid refetching already loaded users
                    const response = await axios.get(`http://localhost:8080/api/auth/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    fetchedUsers[id] = response.data;
                    console.log("id: ");
                    console.log(id);
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
        console.log(postId);
        setOpenComments(prev => ({
            ...prev,
            [postId]: !prev[postId]
        })); // hide : show
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

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={() => setPage(page + 1)}  // Load next page
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p className="text-secondary text-center pt-5 pb-3">No more posts</p>}
        >
            {posts.map((post) => (
                <div key={post.postId}>
                    <div className="post border-bottom p-3 bg-white w-shadow" >
                        <div className="media text-muted pt-3">
                            <Link to={`/profile?userId=${post.userId}`} className="d-flex flex-row">
                                {console.log(users[post.userId])}
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
                                <span className="like-btn">
                                    <a href="#" className="post-card-buttons" id="reactions">
                                        <i className="bx bxs-like mr-2" /> 67
                                    </a>
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
                                <i className="bx bx-message-rounded mr-2" /> 5
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
                                <div className="dropdown-menu post-dropdown-menu">
                                    <a href="#" className="dropdown-item">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <i className="bx bx-share-alt" />
                                            </div>
                                            <div className="col-md-10">
                                                <span>Share Now (Public)</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <i className="bx bx-share-alt" />
                                            </div>
                                            <div className="col-md-10">
                                                <span>Share...</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <i className="bx bx-message" />
                                            </div>
                                            <div className="col-md-10">
                                                <span>Send as Message</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="media-body">
                            <div className="comment-see-more">
                                <div className="h6 text-secondary text-center" onClick={() => toggleComments(post.postId)}>
                                    <hr></hr>
                                    {openComments[post.postId] ? 'Hide Comments' : 'See Comments'}
                                    {/* {console.log(post.postId)} */}
                                </div>
                                {openComments[post.postId] && (
                                    <ResponseList postId={post.postId} />
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