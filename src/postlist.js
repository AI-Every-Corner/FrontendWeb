import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/posts`, {
                params: {
                  page,
                  size: 10
                },
            });
            console.log(response);
            setPosts([...posts, ...response.data.posts]);  // Append new posts
            if (response.data.last) {
                setHasMore(false);  // No more posts to load
            }
        } catch (error) {
            console.error("Failed to load posts", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={() => setPage(page + 1)}  // Load next page
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more posts</p>}
        >
            {posts.map((post) => (
                <div key={post.postId}>
                  {console.log(typeof post.createdAt)}
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
      id: {post.userId}
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
      3 hours ago, {post.createdAt}<i className="bx bx-globe ml-3" />
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
  src={post.img}
  className="post-content"
  alt="post image"
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
<div
  className="border-top pt-3 hide-comments"
  style={{ display: "none" }}
>
  <div className="row bootstrap snippets">
  <div className="col-md-12">
    <div className="comment-wrapper">
    <div className="panel panel-info">
      <div className="panel-body">
      <ul className="media-list comments-list">
        <li className="media comment-form">
        <a href="#" className="pull-left">
          <img
          src="assets/images/users/user-4.jpg"
          alt=""
          className="img-circle"
          />
        </a>
        <div className="media-body">
          <form action="" method="" role="form">
          <div className="row">
            <div className="col-md-12">
            <div className="input-group">
              <input
              type="text"
              className="form-control comment-input"
              placeholder="Write a comment..."
              />
              <div className="input-group-btn">
              <button
                type="button"
                className="btn comment-form-btn"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                <i className="bx bxs-smiley-happy" />
              </button>
              <button
                type="button"
                className="btn comment-form-btn comment-form-btn"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                <i className="bx bx-camera" />
              </button>
              <button
                type="button"
                className="btn comment-form-btn comment-form-btn"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                <i className="bx bx-microphone" />
              </button>
              <button
                type="button"
                className="btn comment-form-btn"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                <i className="bx bx-file-blank" />
              </button>
              </div>
            </div>
            </div>
          </div>
          </form>
        </div>
        </li>
        <li className="media">
        <a href="#" className="pull-left">
          <img
          src="assets/images/users/user-2.jpg"
          alt=""
          className="img-circle"
          />
        </a>
        <div className="media-body">
          <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">
            <a href="#" className="fs-8">
            Karen Minas
            </a>
          </strong>
          <a href="#">
            <i className="bx bx-dots-horizontal-rounded" />
          </a>
          </div>
          <span className="d-block comment-created-time">
          30 min ago
          </span>
          <p className="fs-8 pt-2">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet,{" "}
          <a href="#">#consecteturadipiscing </a>.
          </p>
          <div className="commentLR">
          <button
            type="button"
            className="btn btn-link fs-8"
          >
            Like
          </button>
          <button
            type="button"
            className="btn btn-link fs-8"
          >
            Reply
          </button>
          </div>
        </div>
        </li>
        <li className="media">
        <a href="#" className="pull-left">
          <img
          src="https://bootdey.com/img/Content/user_2.jpg"
          alt=""
          className="img-circle"
          />
        </a>
        <div className="media-body">
          <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">
            <a href="#" className="fs-8">
            Lia Earnest
            </a>
          </strong>
          <a href="#">
            <i className="bx bx-dots-horizontal-rounded" />
          </a>
          </div>
          <span className="d-block comment-created-time">
          2 hours ago
          </span>
          <p className="fs-8 pt-2">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet,{" "}
          <a href="#">#consecteturadipiscing </a>.
          </p>
          <div className="commentLR">
          <button
            type="button"
            className="btn btn-link fs-8"
          >
            Like
          </button>
          <button
            type="button"
            className="btn btn-link fs-8"
          >
            Reply
          </button>
          </div>
        </div>
        </li>
        <li className="media">
        <a href="#" className="pull-left">
          <img
          src="https://bootdey.com/img/Content/user_3.jpg"
          alt=""
          className="img-circle"
          />
        </a>
        <div className="media-body">
          <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">
            <a href="#" className="fs-8">
            Rusty Mickelsen
            </a>
          </strong>
          <a href="#">
            <i className="bx bx-dots-horizontal-rounded" />
          </a>
          </div>
          <span className="d-block comment-created-time">
          17 hours ago
          </span>
          <p className="fs-8 pt-2">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet,{" "}
          <a href="#">#consecteturadipiscing </a>.
          </p>
          <div className="commentLR">
          <button
            type="button"
            className="btn btn-link fs-8"
          >
            Like
          </button>
          <button
            type="button"
            className="btn btn-link fs-8"
          >
            Reply
          </button>
          </div>
        </div>
        </li>
        <li className="media">
        <div className="media-body">
          <div className="comment-see-more text-center">
          <button
            type="button"
            className="btn btn-link fs-8"
          >
            See More
          </button>
          </div>
        </div>
        </li>
      </ul>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
</div>

</div>
            ))}
        </InfiniteScroll>
    );
};

export default PostList;
