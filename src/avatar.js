import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from './context';
import axios from 'axios';

function Avatar() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const { setAvatarUrl } = useContext(UserContext);
    const [formData, setFormData] = useState({
        nickName: '',
        username: '',
        imagePath: ''
        
    });

    //const { userId } = useContext(UserContext);
    const urlUserId = params.get('userId'); // 從查詢參數中獲取 userId
    const storedUserId = localStorage.getItem('userId');
    const userId = urlUserId || storedUserId; // 使用 URL 或 localStorage 中的 userId
    const [setPosts] = useState([]);  // New state for posts
    const [moodData, setMoodData] = useState();
    const [isCurrentUser, setIsCurrentUser] = useState(false); //

    useEffect(() => {

        const currentUserId = localStorage.getItem('userId');
        setIsCurrentUser(userId === currentUserId);

        console.log('Fetched userId:', userId);
        console.log('Query userId:', userId);

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
                    username: userData.username,
                    imagePath: userData.imagePath
                });
                if (userData.imagePath) {
                    setAvatarUrl(`http://localhost:8080${userData.imagePath}`);
                }
            })
            .catch(error => {
                console.error("獲取用戶資料時發生錯誤:", error);
            });

        // Fetch posts by user ID
        axios.get(`http://localhost:8080/posts/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            setPosts(response.data);  // Update the posts state with the response
            
        }).catch(error => {
            console.error("Error fetching posts:", error);
        });

        console.log('URL 中的 userId:', userId);

    }, [userId]);

    return (
        <div>
            <div className="profile-img-overlay" />
            <img
                src={formData.imagePath}
                alt="Avatar"
                className="avatar img-circle"
            />
            <div className="profile-img-caption">
                <label htmlFor="updateProfilePic" className="upload">
                    <i className="bx bxs-camera" /> Update
                    <input
                        type="file"
                        id="updateProfilePicInput"
                        className="text-center upload"
                    />
                </label>
            </div>
        </div>
    );
}

export default Avatar;



