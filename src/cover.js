import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './context';
import { useContext } from 'react';


function Cover() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const { setCoverUrl } = useContext(UserContext);
    const [formData, setFormData] = useState({
        coverUrl: ''
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
                    coverUrl: userData.coverPath ? `${userData.coverPath}` : null
                });
                if (userData.coverPath) {
                    setCoverUrl(`${userData.coverPath}`);
                }
            })
            .catch(error => {
                console.error("獲取用戶資料時發生錯誤:", error);
            });
            
        console.log('URL 中的 userId:', userId);

    }, [userId]);

    return (
        <div>
            <div className="profile-header-background">
                <a className="profile-cover">
                    <img
                        src={formData.coverUrl}
                        alt="Profile Header Background"
                    />
                </a>
                
            </div>
        </div>
    );
}

export default Cover;