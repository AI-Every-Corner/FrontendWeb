// Intro.js
import React, { useContext } from 'react';
import { UserContext } from './context';
import { useLocation } from 'react-router-dom';

function Intro() {
  const { userInfo } = useContext(UserContext);

  const location = useLocation();
    const params = new URLSearchParams(location.search);
    const queryUserId = params.get('userId'); // Get userId from query parameters
    const userId = params.get('userId'); // 從查詢參數中獲取 userId
    const localStorageUserId = localStorage.getItem('userId'); // Get userId from localStorage

  return (
    <div>
    <div className="intro">
      <p>工作：{userInfo.work}</p>
      <p>學校：{userInfo.school}</p>
      <p>居住地：{userInfo.location}</p>
      <p>來自於：{userInfo.fromLocation}</p>
      <p>感情狀態：{userInfo.relationship}</p>
      <p>聯絡電話：{userInfo.phone}</p>
    </div>
    {/* Conditionally render "Edit Details" if userId matches */}
    {String(localStorageUserId) === String(queryUserId) && (
        <div className="intro-item d-flex justify-content-between align-items-center">
          <a href={`/about?userId=${queryUserId}`} className="btn btn-quick-link join-group-btn border w-100">
            Edit Details
          </a>
        </div>
      )}
    </div>
  );
}

export default Intro;
