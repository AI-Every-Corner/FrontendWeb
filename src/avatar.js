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
    const { avatar, setAvatar } = useContext(UserContext);
    const [formData, setFormData] = useState({
        nickName: '',
        username: '',
        imagePath: ''
    });

    //const { userId } = useContext(UserContext);
    const urlUserId = params.get('userId'); // 從查詢參數中獲取 userId
    const storedUserId = localStorage.getItem('userId');
    const userId = urlUserId || storedUserId; // 使用 URL 或 localStorage 中的 userId
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
                    if (userData.imagePath.startsWith('http') || userData.imagePath.startsWith('https')) {
                        setAvatar(userData.imagePath);  // No need to prepend anything
                    } else {
                        setAvatar(`http://localhost:8080${userData.imagePath}`);  // Prepend base URL for relative paths
                    }
                }
            })
            .catch(error => {
                console.error("獲取用戶資料時發生錯誤:", error);
            });

    }, [userId]);

    return (
        <div>
            <div className="mr-3 post-user-image" />
            <img
                src={formData.imagePath}
                alt="Avatar"
                className="avatar img-circle"
            />
        </div>
    );
}

export default Avatar;