import React, { useState, useContext, useEffect, forwardRef, useImperativeHandle } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import TimePassedComponent from './timepassedcomponent';

const ResponseList = forwardRef(({ postId }, ref) => {
  const [responses, setResponses] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [likedResponses, setLikedResponses] = useState({});
  const [fetchedResponses, setFetchedResponses] = useState([]);

  
  // initialize page
  useEffect(() => {
    // setPage(0);
    // setResponses([]);
    // setHasMore(true);
    // fetchComments();
    // fetchLikedResponses();
  }, []);

  const storeResponseIds = (postId, responseId) => {
    fetchedResponses.push({postId, responseId});
  }

  // Fetch user data based on userIds and update the state
  const fetchUsers = async (userIds) => {
    try {
      const token = localStorage.getItem('token');
      const fetchedUsers = {};
  
      await Promise.all(userIds.map(async (userId) => {
        if (!users[userId]) {
          const response = await axios.get(`http://localhost:8080/api/auth/${userId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          fetchedUsers[userId] = response.data;
        }
      }));
  
      setUsers((prevUsers) => ({ ...prevUsers, ...fetchedUsers }));
  
    } catch (error) {
      console.error("fetchUsers: " + error);
    }
  };
  

  const fetchComments = async (currentPage) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/responses/${postId}`, {
        headers: { 'Authorization': `Bearer ${token}` },
        params: { page: currentPage, size: 5 }
      });
  
      if (currentPage === 0) {
        setResponses(response.data.respList);
      } else {
        setResponses(prevResponses => [...prevResponses, ...response.data.respList]);
      }
  
      // 設定是否有更多頁面
      const morePagesAvailable = response.data.totalPages > currentPage + 1;
      setHasMore(morePagesAvailable);
  
      if (morePagesAvailable) {
        setPage(currentPage + 1);
      }
  
      // 加載用戶信息
      const userIds = response.data.respList.map(resp => resp.userId);
      await fetchUsers(userIds);
  
    } catch (error) {
      console.error("fetchComments: " + error);
      setHasMore(false);
    }
  };
  
  

  useEffect(() => {
    setPage(0);
    setResponses([]);
    setHasMore(true);
    fetchComments(0);
  }, [postId]);
  

  const addLike = async (responseId) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
  
      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }
  
      const response = await axios.put(`http://localhost:8080/responses/${responseId}/like`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'userId': userId
        }
      });
  
      if (response.status === 200) {
        setLikedResponses(prevLikedResponses => ({
          ...prevLikedResponses,
          [responseId]: true
        }));
  
        setResponses(prevResponses => prevResponses.map(response =>
          response.responseId === responseId ? { ...response, likes: response.likes + 1 } : response
        ));
      }
  
    } catch (error) {
      console.error("addLike: " + error);
    }
  };
  

  const removeLike = async (responseId) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const response = await axios.put(`http://localhost:8080/responses/${responseId}/unlike`, null, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'userId': userId
        }
      });
      
      console.log(response);

      setLikedResponses(prevLikedResponses => {
        const newLikedResponses = { ...prevLikedResponses };
        delete newLikedResponses[responseId];
        return newLikedResponses;
      });

      // Update responses state
      setResponses(prevResponses => prevResponses.map(response =>
        response.responseId === responseId ? { ...response, likes: response.likes - 1 } : response
      ));
    } catch (error) {
      console.error("removeLike: " + error);
    }
  }

  const handleLike = (responseId) => {
    if (likedResponses[responseId]) {
      removeLike(responseId);
    } else {
      addLike(responseId);
    }
  }

  useEffect(() => {
    // console.log("likedResponses");
    // console.log(likedResponses);
  }, [likedResponses]);

  const fetchLikedResponses = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const result = await axios.get(`http://localhost:8080/responses/getLikedResponseIds/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const newLikedResponses = {};
      result.data.forEach((item) => {
        if (item.responseId) {
          newLikedResponses[item.responseId] = true;
        }
      });
      // console.log("newLikedResponses", newLikedResponses);
      setLikedResponses(newLikedResponses);
    } catch (error) {
      console.error("fetchLikedResponses: " + error);
    }
  }

  const refreshComments = async () => {
    setPage(0);
    setResponses([]);
    setHasMore(true);
    await fetchComments(0);
  };

  useImperativeHandle(ref, () => ({
    // refreshComments: (newComment) => {
    //   console.log("newComment");
    //   console.log(newComment);
      // if (newComment && newComment.userId) {
      //   setResponses(prevResponses => [newComment, ...prevResponses]);
      //   fetchUsers([newComment[0].userId]);
      // } else {
      //   console.error("Invalid new comment data:", newComment);
      // }
    // }
    refreshComments: refreshComments
  }));

  return (
    <InfiniteScroll
      dataLength={responses.length}
      next={fetchComments}
      hasMore={hasMore}
      loader={<h4 className="text-secondary text-center pt-5 pb-3">Loading...</h4>}
      endMessage={<p className="text-secondary text-center pt-5 pb-3">No more comments</p>}
    >
      {/* <div> */}
        {responses.map((response) => (
<div
  key={response.responseId}
  className="border-top pt-3 hide-comments px-3"
>
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
                {/* {console.log("response.updateAt: ")}
                {console.log(response.updateAt)} */}
                &nbsp; <TimePassedComponent updateAt={response.updateAt} />&ensp;ago
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
                <a className="post-card-buttons p-1" id="reactions" onClick={() => handleLike(response.responseId)}>
                  <i className="bx bxs-like mr-2 text-start" /> 
                  {likedResponses[response.responseId] ? 
                  <span>{response.likes}</span> : 
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
      {/* </div> */}
    </InfiniteScroll>
  );
});

export default ResponseList;