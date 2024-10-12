import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from './context';
import axios from 'axios';

function Follow() {

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
    const [isCurrentUser, setIsCurrentUser] = useState(false); //
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem('token');
        const currentUserId = localStorage.getItem('userId');
        setIsCurrentUser(userId === currentUserId);

        if (!isCurrentUser) {
            axios.get(`http://localhost:8080/${storedUserId}/checkfollow/${urlUserId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setIsFollowing(response.data);
            })
            .catch(error => {
                console.error('Error checking follow status:', error);
            });
        }

    }, [userId, storedUserId, isCurrentUser]);

    const handleFollow = () => {
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:8080/${storedUserId}/follow/${userId}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data);
            setIsFollowing(true);
        })
        .catch(error => {
            console.error("關注失敗:", error);
        });
    };

    const handleUnfollow = () => {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:8080/${storedUserId}/unfollow/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data);
            setIsFollowing(false);
        })
        .catch(error => {
            console.error("取消關注失敗:", error);
        });
    };

    return (
        <div>
            {!isCurrentUser && (
            <div className="intro mt-4">
                <div className="d-flex">
                <button type="button" 
                className={`btn ${isFollowing ? 'btn-secondary' : 'btn-follow'} mr-3`}
                onClick={isFollowing ? handleUnfollow : handleFollow}
                >
                <i className={`bx ${isFollowing ? 'bx-user-minus' : 'bx-user-plus'}`} /> 
                {isFollowing ? 'Unfollow' : 'Follow'}
                </button>
                    <button
                        type="button"
                        className="btn btn-start-chat"
                        data-toggle="modal"
                        data-target="#newMessageModal"
                    >
                        <i className="bx bxs-message-rounded" />{" "}
                        <span className="fs-8">Email</span>
                    </button>
                    
                </div>
            </div>
            )}
        </div>
    );
}

export default Follow;



