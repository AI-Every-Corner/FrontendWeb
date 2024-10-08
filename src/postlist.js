import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import TimePassedComponent from "./timepassedcomponent";
import ResponseList from "./responselist";
import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [ViewComments, setViewComments] = useState(true);

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
            const response = await axios.get(`http://localhost:8080/posts`,{
              headers: {
                'Authorization': `Bearer ${token}` // 添加 Authorization header
              },
              params: {
                page: 0,
                size: 10
              }
            });
            console.log(response);
            setPosts([...posts, ...response.data.postsList]);  // Append new posts

            if (response.data.last) {
              setHasMore(false);  // No more posts to load
            }
            
            if (response.data.totalPages - 1 === page) {
              setHasMore(false);  // No more pages to load
            }
        } catch (error) {
          console.error("Failed to load posts", error);
        }
    };

    useEffect(() => {
      fetchPosts();
    }, [page]);

    const handleViewComments = () => {
      setViewComments(false);
    }

    return (
        <InfiniteScroll
          dataLength={posts.length}
          next={() => setPage(page + 1)}  // Load next page
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p className="text-secondary text-center pt-5 pb-3">No more posts</p>}
        >
          {console.log(page)}
          {posts.map((post) => (
            <div key={post.postId}>
<div className="post border-bottom p-3 bg-white w-shadow" key={post.postId}>
  <div className="media text-muted pt-3">
    <img
    src="assets/images/users/user-1.jpg"
    alt="Online user"
    className="mr-3 post-user-image"
    />
    <div className="media-body pb-3 mb-0 small lh-125">
    <div className="d-flex justify-content-between align-items-center w-100">
      <a href="#" className="text-gray-dark post-user-name">
        <a className="h5">{post.nickname}</a>
        <Link to="/profile"/>
      </a>
      <div className="dropdown">
      <a
        href="#"
        className="post-more-settings"
        role="button"
        data-toggle="dropdown"
        id="postOptions"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="bx bx-dots-horizontal-rounded" />
      </a>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left post-dropdown-menu">
        <a
        href="#"
        className="dropdown-item"
        aria-describedby="savePost"
        >
        <div className="row">
          <div className="col-md-2">
          <i className="bx bx-bookmark-plus post-option-icon" />
          </div>
          <div className="col-md-10">
          <span className="fs-9">Save post</span>
          <small
            id="savePost"
            className="form-text text-muted"
          >
            Add this to your saved items
          </small>
          </div>
        </div>
        </a>
        <a
        href="#"
        className="dropdown-item"
        aria-describedby="hidePost"
        >
        <div className="row">
          <div className="col-md-2">
          <i className="bx bx-hide post-option-icon" />
          </div>
          <div className="col-md-10">
          <span className="fs-9">Hide post</span>
          <small
            id="hidePost"
            className="form-text text-muted"
          >
            See fewer posts like this
          </small>
          </div>
        </div>
        </a>
        <a
        href="#"
        className="dropdown-item"
        aria-describedby="snoozePost"
        >
        <div className="row">
          <div className="col-md-2">
          <i className="bx bx-time post-option-icon" />
          </div>
          <div className="col-md-10">
          <span className="fs-9">
            Snooze Lina for 30 days
          </span>
          <small
            id="snoozePost"
            className="form-text text-muted"
          >
            Temporarily stop seeing posts
          </small>
          </div>
        </div>
        </a>
        <a
        href="#"
        className="dropdown-item"
        aria-describedby="reportPost"
        >
        <div className="row">
          <div className="col-md-2">
          <i className="bx bx-block post-option-icon" />
          </div>
          <div className="col-md-10">
          <span className="fs-9">Report</span>
          <small
            id="reportPost"
            className="form-text text-muted"
          >
            I'm concerned about this post
          </small>
          </div>
        </div>
        </a>
      </div>
      </div>
    </div>
    <span className="d-block">
      <TimePassedComponent updateAt={post.updateAt} /> ago, {post.updateAt}<i className="bx bx-globe ml-3" />
    </span>
    </div>
  </div>
<div className="mt-3">
  <p>
  {post.content}
  </p>
</div>
<div className="d-block mt-3">
  <img
  src={post.imagePath}
  className="post-content"
  alt="post image"
  style={{ display: post.imagePath === "" ? "none" : "block" }} 
  />
</div>
<div className="mb-3">

  <div className="argon-reaction">
  <span className="like-btn">
    <a href="#" className="post-card-buttons" id="reactions">
    <i className="bx bxs-like mr-2" /> 67
    </a>
    <ul className="reactions-box dropdown-shadow">
    <li
      className="reaction reaction-like"
      data-reaction="Like"
    />
    <li
      className="reaction reaction-love"
      data-reaction="Love"
    />
    <li
      className="reaction reaction-haha"
      data-reaction="HaHa"
    />
    <li
      className="reaction reaction-wow"
      data-reaction="Wow"
    />
    <li
      className="reaction reaction-sad"
      data-reaction="Sad"
    />
    <li
      className="reaction reaction-angry"
      data-reaction="Angry"
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
  <div className="comment-see-more text-center" onClick={handleViewComments}>
    {ViewComments ? 
    <div>
      <hr></hr>
      <button
        type="button"
        className="btn btn-link fs-8"
      >
        See comments
      </button>
    </div> : <ResponseList postId={post.postId}/>
    }
  </div>
</div>
</div>

</div>
            ))}
        </InfiniteScroll>
    );
};

export default PostList;