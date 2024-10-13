import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './context';
import axios from 'axios';
import Intro from './intro';
import Recentmedia from './recentmedia';
import { useNavigate, useParams, useLocation } from 'react-router-dom';



function MiniPhoto() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId'); // 從查詢參數中獲取 userId

    const [formData, setFormData] = useState({
        nickName: '',
        username: ''
    });

    const [posts, setPosts] = useState([]);
    const [isCurrentUser, setIsCurrentUser] = useState(false); //

    useEffect(() => {
        console.log('Fetched userId:', userId);

        const currentUserId = localStorage.getItem('userId');
        setIsCurrentUser(userId === currentUserId);

        // 從後端獲取用戶資料
        const token = localStorage.getItem('token'); // 假設 token 已存儲在 localStorage 中

        axios.get(`http://localhost:8080/api/auth/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}` // 設置 Authorization 標頭
            }
        })
            .then(response => {
                const userData = response.data;
                setFormData({
                    nickName: userData.nickName,  // 假設後端返回的資料包含 nickName 和 username
                    username: userData.username
                });
            })
            .catch(error => {
                console.error("獲取用戶資料時發生錯誤:", error);
            });
    }, [userId]);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

        axios.get(`http://localhost:8080/posts/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, [userId]);

    return (

        <div className="intro mt-5 row mv-hidden">
            {posts.slice(0, 3).map((post, index) => (
                <div key={index} className="col-md-4">
                    <img
                        src={post.imagePath}  // 假設 post 裡面有 imagePath
                        width={95}
                        alt={`Post ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
}

export default MiniPhoto;