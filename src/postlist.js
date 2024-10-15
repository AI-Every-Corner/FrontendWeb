import React, { useState, useEffect, useContext, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { UserContext } from './context';
import TimePassedComponent from "./timepassedcomponent";
import ResponseList from "./responselist";
import { Link } from "react-router-dom";


const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [users, setUsers] = useState([]);
  const { avatar, userId } = useContext(UserContext); // 使用 useContext 來獲取 此用者相片
  // const { isLoggedIn } = useContext(UserContext); // 使用 useContext 來獲取 此用者相片
  const [openComments, setOpenComments] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const [commentContent, setCommentContent] = useState({});
  const responseListRefs = useRef({});

  // initialize page
  useEffect(() => {
    setPage(0);
    setPosts([]);
    setHasMore(true);
    fetchPosts();
    fetchLikedPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
      const response = await axios.get(`http://localhost:8080/posts`,{
        headers: {
          'Authorization': `Bearer ${token}` // 添加 Authorization header
        },
        params: {
          page: page,
          size: 10
        }
      });
      console.log(response);
      setPosts([...posts, ...response.data.postsList]);  // Append new posts

      if (response.data.last || response.data.totalPages - 1 === page) {
        setHasMore(false);  // No more posts to load
      }

      // Fetch user details for the new responses
      const userIds = response.data.postsList.map(resp => resp.userId);
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
        // console.log("userIds: ");
        // console.log(userIds);
        if (!users[id]) {  // Avoid refetching already loaded users
          const response = await axios.get(`http://localhost:8080/api/auth/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          fetchedUsers[id] = response.data;
          // console.log("id: ");
          // console.log(id);
        }
      }));
      setUsers((prevUsers) => ({ ...prevUsers, ...fetchedUsers }));
    } catch (error) {
      console.error("fetchUsers: " + error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const toggleComments = (postId) => {
    // console.log(postId);
    setOpenComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    })); // hide : show
  }

  const refreshAllComments = () => {
    Object.values(responseListRefs.current).forEach(ref => {
      if (ref && ref.refreshComments) {
        ref.refreshComments();
      }
    });
  };

  const handleAddComment = async (postId) => {
    const content = commentContent[postId]?.trim(); // 提取對應 postId 的評論內容並修剪
  
    if (!content) {
      alert("回覆內容不能為空");
      return;
    }
  
    try {
      console.log("commentContent:", content);
      const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
  
      const requestBody = {
        postId: postId,
        userId: userId, // 添加 userId
        content: content,
        updateAt: new Date().toISOString()
      };
      console.log("requestBody: ", requestBody);
  
      // 發送添加評論的請求
      const response = await axios.post(`http://localhost:8080/responses/${postId}`, requestBody, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      // 清空對應輸入框的內容
      setCommentContent(prev => ({ ...prev, [postId]: "" }));
      
      // 更新帖子的評論計數
      setPosts(prevPosts => prevPosts.map(post =>
        post.postId === postId ? { ...post, commentCount: post.commentCount + 1 } : post
      ));
  
      // 觸發對應 ResponseList 的刷新，以重新加載所有評論
      if (responseListRefs.current[postId]) {
        responseListRefs.current[postId].refreshComments();
      }
  
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };
  
  
  

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
      const response = await axios.put(`http://localhost:8080/posts/${postId}/like`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'userId': userId
        }
      });

      // console.log(response);

      setLikedPosts(prevLikedPosts => ({
        ...prevLikedPosts,
        [postId]: true
      }));

      // Update the posts state
      setPosts(prevPosts => prevPosts.map(post => 
        post.postId === postId ? { ...post, likes: post.likes + 1 } : post
      ));
    } catch (error) {
      console.error("addLike: " + error);
    }
  }

  const removeLike = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const response = await axios.put(`http://localhost:8080/posts/${postId}/unlike`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'userId': userId
        }
      });
      
      console.log(response);

      setLikedPosts(prevLikedPosts => {
        const newLikedPosts = { ...prevLikedPosts };
        delete newLikedPosts[postId];
        return newLikedPosts;
      });

      // Update the posts state
      setPosts(prevPosts => prevPosts.map(post => 
        post.postId === postId ? { ...post, likes: post.likes - 1 } : post
      ));
    } catch (error) {
      console.error("removeLike: " + error);
    }
  }

  const handleLike = (postId) => {
    console.log("postId:", postId);
    console.log("likedPosts:", likedPosts);
    if (likedPosts[postId]) {
      removeLike(postId);
    } else {
      addLike(postId);
    }
  }

  useEffect(() => {
    console.log("likedPosts");
    console.log(likedPosts);
  }, [likedPosts]);

  const fetchLikedPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:8080/posts/getLikedPostIds/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // console.log(response.data);

      const newLikedPosts = {};
      response.data.forEach((item) => {
        if (item.postId) {
          newLikedPosts[item.postId] = true;
        }
      });
      console.log("newLikedPosts", newLikedPosts);
      setLikedPosts(newLikedPosts);
    } catch (error) {
      console.error("fetchLikedPosts: " + error);
    }
  }

  const handleKeyPress = (e, postId) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission
      handleAddComment(postId);
    }
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={() => setPage(page + 1)}  // Load next page
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p className="text-secondary text-center pt-5 pb-3">No more posts</p>}
      // resetFunction={() => setPage(0)}
    >
      {posts.map((post) => (
        <div key={post.postId}>
        {console.log("post")}
        {console.log(post)}
<div className="post border-bottom p-3 bg-white w-shadow">
  <div className="media text-muted pt-3">
    <Link to={`/profile?userId=${post.userId}`} className="d-flex flex-row">
    {users[post.userId] ? (
    <img
      src={users[post.userId].imagePath}
      alt="Online user"
      className="mr-3 post-user-image"
    /> ) : (
      <p>Loading user data...</p>
    )}
    <div className="media-body pb-3 mb-0 small lh-125">
    <div className="d-flex justify-content-between align-items-center w-100">
    <Link to={`/profile?userId=${post.userId}`} className="h5 text-gray-dark post-user-name">
        {post.nickname}
      </Link>
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
      alt="post image"
      style={{ display: post.imagePath === "" ? "none" : "block" }} 
    /> : (
      <pre></pre>
    )}
  </div>
<div className="mb-3">
  <div className="argon-reaction">
    <span className="like-btn" onClick={() => handleLike(post.postId)}>
      {
        likedPosts[post.postId] ? 
          (
            <a className="post-card-buttons" id="reactions">
              <i className="bx bxs-like mr-2" /> {post.likes}
            </a>
          )
        :
          (
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
      <div className="h6 text-secondary text-center" onClick={() => toggleComments(post.postId)} style={{ cursor: 'pointer' }}>
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
                      value={commentContent[post.postId] || ""}
                      onChange={(e) => setCommentContent(prev => ({ ...prev, [post.postId]: e.target.value }))}
                      onKeyDown={(e) => handleKeyPress(e, post.postId)}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ResponseList
            postId={post.postId}
            ref={el => responseListRefs.current[post.postId] = el}
          />
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

export default PostList;