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
    const [email, setEmail] = useState('');
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

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

    const fetchEmail = () =>{
        const token = localStorage.getItem('token');
        axios.get(`http://localhost:8080/api/auth/${userId}/email`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setEmail(response.data);
            setShowEmailModal(true);
        })
        .catch(error => {
            console.error('獲取電子郵件失敗', error);
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
                            onMouseEnter={fetchEmail}
                            onMouseLeave={() => setShowEmailModal(false)}
                        >
                            <i className="bx bxs-message-rounded" />{" "}
                            <span className="fs-8">Email</span>
                        </button>
                    </div>
                </div>
            )}
            {showEmailModal && (
                <div className="email-modal" style={emailTooltipStyle}>
                    <p>{email}</p>
                </div>
            )}
        </div>
    );
}

const emailTooltipStyle = {
    position: 'absolute',
    top: '-40px',
    right: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid #ccc',
    padding: '8px 12px',
    borderRadius: '4px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    zIndex: '1000',
    backdropFilter: 'blur(5px)',
    transition: 'opacity 0.3s ease-in-out',
    fontSize: '14px',
    color: '#333'
};


export default Follow;



