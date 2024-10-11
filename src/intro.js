// Intro.js
import React, { useContext } from 'react';
import { UserContext } from './context';

function Intro() {
    const { userInfo } = useContext(UserContext);

  return (
    <div className="intro">
      <p>工作：{userInfo.work}</p>
      <p>學校：{userInfo.school}</p>
      <p>居住地：{userInfo.location}</p>
      <p>來自於：{userInfo.fromLocation}</p>
      <p>感情狀態：{userInfo.relationship}</p>
      <p>聯絡電話：{userInfo.phone}</p>
    </div>
  );
}

export default Intro;
