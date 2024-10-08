import React, { useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { UserContext } from "./context";
import axios from "axios";

const PostForm = ({ onPostPublish }) => {
    const { userId } = useContext(UserContext);
    const [content, setContent] = useState("");
    const [mood, setMood] = useState("");
    const [isPublishing, setIsPublishing] = useState(false);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const handleInputChange = (e) => {
        setContent(e.target.value);
    };

    const handleMoodSelect = (reaction) => {
        setMood(reaction);
    };

    const handlePostPublish = async () => {
        if (!content.trim() && !image) {
            alert("Please write something or upload an image before publishing.");
            return;
        }

        setIsPublishing(true);
        try {
            const token = localStorage.getItem('token'); // 從 localStorage 中讀取 token
            const formData = new FormData();

            // 添加 Posts 類型的數據
            const post = {
                userId,
                content,
                moodTag: mood,
                createdAt: new Date().toISOString(),
            };
            formData.append("post", new Blob([JSON.stringify(post)], { type: "application/json" }));

            // 如果有圖片則添加進 formData
            if (image) {
                formData.append("image", image);
            }

            // 發送 POST 請求到後端
            const response = await axios.post("http://localhost:8080/createPost", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                alert("Post published successfully!");
                setContent("");
                setMood("");
                setImage(null);
                setPreview("");
                if (onPostPublish) {
                    onPostPublish(response.data);
                }
            }
        } catch (error) {
            console.error("Failed to publish post", error);
            alert("Failed to publish post. Please try again later.");
        } finally {
            setIsPublishing(false);
        }
    };

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

    return (
        <div className="media post-form w-shadow">
            <div className="media-body">
                <div className="form-group post-input">
                    <textarea
                        className="form-control"
                        id="postForm"
                        rows={2}
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={handleInputChange}
                        disabled={isPublishing}
                    />
                </div>
                <div className="form-group">
                    {!image && (
                        <div {...getRootProps()} style={{ border: '2px dashed #ddd', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>拖放圖片至此...</p>
                            ) : (
                                <p>拖拉或點擊上傳圖片</p>
                            )}
                        </div>
                    )}
                    {preview && (
                        <div style={{ marginTop: '10px', textAlign: 'center' }}>
                            <img src={preview} alt="預覽圖片" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        </div>
                    )}
                </div>
                <div className="form-group post-input mt-2 d-flex justify-content-between align-items-center">
                    <div className="argon-reaction" style={{ flex: 1 }}>
                        <span className="like-btn">
                            <a href="#" className="post-card-buttons" id="reactions">
                                <i className="bx bxs-smile mr-2" /> {mood || "Select your mood"}
                            </a>
                            <ul className="reactions-box dropdown-shadow shorter">
                                {[ 'HaHa', 'Wow', 'Sad', 'Angry' ].map((reaction) => (
                                    <li
                                        key={reaction}
                                        className={`reaction reaction-${reaction.toLowerCase()}`}
                                        data-reaction={reaction}
                                        onClick={() => handleMoodSelect(reaction)}
                                    />
                                ))}
                            </ul>
                        </span>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={handlePostPublish}
                        disabled={isPublishing}
                        style={{ marginRight: '20px' }}
                    >
                        {isPublishing ? "Publishing..." : "Publish"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostForm;