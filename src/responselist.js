import { useState, useContext, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import TimePassedComponent from './timepassedcomponent';

function ResponseList(postId) {
  const [responses, setResponses] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [likedResponses, setLikedResponses] = useState([]);
  var fetchedResponses = fetchedResponses || [];

  const storeResponseIds = (postId, responseId) => {
    fetchedResponses.push({postId, responseId});
  }

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
      const response = await axios.get(`http://localhost:8080/responses/${postId.postId}`,{
        headers: {
          'Authorization': `Bearer ${token}` // 添加 Authorization header
        },
        params: {
          page: page,
          size: 5
        }
      });

      console.log("postId.postId");
      console.log(postId.postId);
      console.log("page");
      console.log(page);
      console.log("response.data.respList[0].responseId");
      console.log(response.data.respList[0].responseId);
      if (page >= response.data.totalPages) {
        setHasMore(false);
        return;
      } else if (!fetchedResponses.find(item => item.postId === postId.postId && item.responseId === response.data.respList[0].responseId)) {
        console.log(response);
        setResponses([...responses, ...response.data.respList]);  // Append new posts

        // Update hasMore based on the API response
        setHasMore(!response.data.last && response.data.totalPages > page + 1);

        // Fetch user details for the new responses
        const userIds = response.data.respList.map(resp => resp.userId);
        fetchUsers(userIds);
          
        // Increment the page number
        setPage(prevPage => prevPage + 1);

        storeResponseIds(postId.postId, response.data.respList[0].responseId);
      } else {
        console.log("already fetched");
        setHasMore(false);
      }
    } catch (error) {
      console.error("fetchComments: " + error);
      setHasMore(false); // Set hasMore to false if there's an error
    }
  }

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
    // setPage(0);
    // setResponses([]);
    // setHasMore(true);
    fetchComments();
  }, [postId, page]);

  const addLike = async (responseId) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }
      console.log("type of userId: " + typeof userId);
      const response = await axios.put(`http://localhost:8080/responses/${responseId}/like`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'userId': userId
        }
      });

      console.log(response);

      setLikedResponses([...likedResponses, responseId]);
    } catch (error) {
      console.error("addLike: " + error);
    }
  }

  const removeLike = async (responseId) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const response = await axios.delete(`http://localhost:8080/responses/${responseId}/unlike`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'userId': userId
        }
      });
      
      console.log(response);

      setLikedResponses(likedResponses.filter(id => id !== responseId));
    } catch (error) {
      console.error("removeLike: " + error);
    }
  }

  const handleLike = (postId, responseId) => {
    if (likedResponses.includes(responseId)) {
      removeLike(postId, responseId);
    } else {
      addLike(postId, responseId);
    }
  }

  useEffect(() => {
    console.log(likedResponses);
  }, [likedResponses]);
  return (
    <InfiniteScroll
      dataLength={responses.length}
      next={fetchComments}
      hasMore={hasMore}
      loader={<h4 className="text-secondary text-center pt-5 pb-3">Loading...</h4>}
      endMessage={<p className="text-secondary text-center pt-5 pb-3">No more comments</p>}
    >
      <div>
        {responses.map((response) => (
<div
  className="border-top pt-3 hide-comments px-3"
  key={response.responseId}
>
  {/* {response.currentPage >= response.totalPages? hasMore = false : hasMore = true} */}
  <div className="row bootstrap snippets">
  <div className="col-md-12">
    <div className="comment-wrapper">
    <div className="panel panel-info">
      <div className="panel-body">
      <ul className="media-list comments-list">
        <li className="media comment-form">
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
          <p className="text-secondary">Loading user data...</p>
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
                &nbsp; <TimePassedComponent updateAt={response.updateAt} />
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
                <a className="post-card-buttons p-1" id="reactions" onClick={() => handleLike(postId, response.responseId)}>
                  <i className="bx bxs-like mr-2 text-start" /> 
                  {likedResponses.includes(response.responseId) ? 
                  <span>{response.likes + 1}</span> : 
                  <span>{response.likes}</span>}
                </a>
              </span>
            </div>
          </div>
        </div>
        </li>
        <li className="media">
        </li>
      </ul>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
      ))}
      </div>
    </InfiniteScroll>
  );
}

export default ResponseList;