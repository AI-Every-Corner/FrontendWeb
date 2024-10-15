import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('post'); // 默認為貼文搜索
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            try {
                console.log('正在搜索:', searchType, searchTerm); // 添加日誌以便調試
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/search', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        searchcontext: searchTerm,
                        type: searchType // 使用 type 作為參數名，值為 searchType
                    }
                });
                console.log('後端回傳的數據:', response.data);
                
                const suggestions = Array.isArray(response.data) ? response.data : [response.data];
                let formattedSuggestions;
                
                if (searchType === 'post') {
                    formattedSuggestions = suggestions.map(item => ({
                        id: item.postId,
                        title: item.title || '無標題',
                        content: item.content || '無內容預覽',
                        type: 'post'
                    }));
                } else {
                    formattedSuggestions = suggestions.map(item => ({
                        id: item.userId,
                        displayName: item.nickName || item.username,
                        username: item.username,
                        imagePath: item.imagePath,
                        type: 'user'
                    }));
                }
                
                setSearchSuggestions(formattedSuggestions);
                setShowDropdown(true);
            } catch (error) {
                console.error('獲取搜索建議失敗:', error);
            }
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.type === 'user' ? suggestion.displayName : suggestion.title);
        setShowDropdown(false);
        if (suggestion.type === 'user') {
            navigate(`/profile?userId=${suggestion.id}`);
        } else {
            navigate(`/post/${suggestion.id}`);
        }
    };


    return (
        <form className="w-30 mx-2 my-auto d-inline form-inline mr-5" onSubmit={handleSearch}>
            <link href="assets/css/search.css" rel="stylesheet" />
            <div className="search-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control search-input"
                    placeholder={searchType === 'user' ? "Search User..." : "Search Post..."}
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                
                <button className="btn search-button" type="submit">
                    <i className="bx bx-search" />
                </button>

                <div className="honey-switch">
                    <input 
                        type="checkbox" 
                        id="searchTypeToggle" 
                        checked={searchType === 'post'}
                        onChange={() => {
                            const newType = searchType === 'user' ? 'post' : 'user';
                            setSearchType(newType);
                        }}
                    />
                    <label htmlFor="searchTypeToggle">
                        <span className="user">User</span>
                        <span className="post">Post</span>
                    </label>
                </div>
            </div>
            {showDropdown && (
                <div className="search-dropdown" ref={dropdownRef}>
                    {searchSuggestions.length > 0 ? (
                        searchSuggestions.map((suggestion) => (
                            <div 
                                key={suggestion.id} 
                                className="search-suggestion-item"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion.type === 'user' ? (
                                    <>
                                        <img src={suggestion.imagePath} alt={suggestion.displayName} className="suggestion-avatar" />
                                        <div className="suggestion-info">
                                            <div className="suggestion-name">{suggestion.displayName}</div>
                                            <div className="suggestion-username">@{suggestion.username}</div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="suggestion-info">
                                        <div className="suggestion-title">{suggestion.title}</div>
                                        <div className="suggestion-content">
                                            {suggestion.content && typeof suggestion.content === 'string'
                                                ? suggestion.content.substring(0, 50) + '...'
                                                : '無內容預覽'}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="no-suggestions">沒有找到相關建議</div>
                    )}
                </div>
            )}
        </form>
    );
}


export default Search;
