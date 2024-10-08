import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ResponseList(postId) {

  return (
    <div className="App">
<div
  className="border-top pt-3 hide-comments"
  // style={{ display: "none" }}
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
  );
}

export default ResponseList;