import { useState, useContext, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import { UserContext } from './context';
import { Link, useNavigate } from 'react-router-dom';
import TimePassedComponent from './timePassedComponent';

function ResponseList(postId) {
  const [responses, setResponses] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { avatarUrl } = useContext(UserContext); // 使用 useContext 來獲取 此用者相片

  const fetchComments = async () => {
    console.log("fetchComments");
    console.log(postId);
    try {
      const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
      const response = await axios.get(`http://localhost:8080/responses/${postId.postId}`,{
        headers: {
          'Authorization': `Bearer ${token}` // 添加 Authorization header
        },
        params: {
          page: page,
          size: 10
        }
      });
      console.log(response);
      setResponses([...responses, ...response.data.respList]);  // Append new posts

      if (response.data.last || response.data.totalPages - 1 === page) {
        setHasMore(false);  // No more posts to load
      }

      // Fetch user details for the new responses
      const userIds = response.data.respList.map(resp => resp.userId);
      fetchUsers(userIds);
    } catch (error) {
      console.error("fetchComments: " + error);
    }
  }

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
    fetchComments();
  }, [postId, page]);

  const handleReply = () => {
    fetchComments();
  }

  return (
    <InfiniteScroll
      dataLength={responses.length}
      next={() => setPage(page + 1)}  // Load next page
      hasMore={hasMore}
      loader={<p className="text-secondary text-center pt-5 pb-3">Loading...</p>}
      endMessage={<p className="text-secondary text-center pt-5 pb-3">No more replies</p>}
    >
      {responses.map((response) => (
        <div
  className="border-top pt-3 hide-comments"
  key={response.id}
>
  <div className="row bootstrap snippets">
  <div className="col-md-12">
    <div className="comment-wrapper">
    <div className="panel panel-info">
      <div className="panel-body">
      <ul className="media-list comments-list">
        <li className="media comment-form">
        {users[response.userId] ? (
        <a href="#" className="pull-left">
          <Link to="/profile">
            <img
            src={avatarUrl}
            alt="User Avatar"
            className="img-circle"
            />
          </Link>
        </a>
        ) : (
          <p>Loading user data...</p>
        )
        }
        {console.log(users[response.userId])}
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
        {users[response.userId] ? (
        <a href="#" className="pull-left">
          <img
          src={users[response.userId].imagePath}
          alt=""
          className="img-circle"
          />
        </a>
        ) : (
          <p>Loading user data...</p>
        )}
        <div className="media-body">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex flex-row justify-content-around">
              <div className="me-2">
                <strong className="text-gray-dark">
                  <a className="fs-8">
                    {response.nickname}
                  </a>
                </strong>
              </div>
              <div>
                <a className="comment-created-time">
                &nbsp;  ago
                </a>
              </div>
            </div>
            <a href="#">
              <i className="bx bx-dots-horizontal-rounded" />
            </a>
          </div>
          <p className="fs-8 pt-2">
          {response.content}
          </p>
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex align-items-center w-100 commentLR mb-3">
              <span className="like-btn">
                <a className="post-card-buttons p-1" id="reactions">
                  <i className="bx bxs-like mr-2 text-start" /> 67
                </a>
              </span>
            </div>
          </div>
        </div>
        </li>
        <li className="media">
        {response.length > 0?
        <div className="media-body">
          <div className="comment-see-more text-center">
            <button
              type="button"
              className="btn btn-link fs-8"
            >
              See More
            </button>
          </div>
        </div> : null}
        </li>
      </ul>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
      ))}
    </InfiniteScroll>
  );
}

export default ResponseList;