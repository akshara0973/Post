import React, { useState, useEffect } from "react";
import axios from "axios";
import avatarImage from "../assets/212890.jpg";
import "./CreatePost.css";

const API_URL = process.env.REACT_APP_API_URL;

function CreatePost() {
  const [postText, setPostText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [location, setLocation] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`, {
          params: { user: "Akshara" },
        });
        setPosts(response.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleEmojiSelect = (emoji) => {
    setPostText((prev) => prev + emoji);
  };

  const handleCloseEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  const handlePost = async () => {
    if (postText || imagePreview) {
      const newPost = {
        text: postText,
        image: imagePreview,
        location: location,
        username: "Akshara",
        timestamp: new Date().toISOString(),
      };

      try {
        await axios.post(`${API_URL}/posts`, newPost);
        setPostText("");
        setImagePreview(null);
        setLocation("");
        setShowEmojiPicker(false);
        alert("Posted!");

        const response = await axios.get(`${API_URL}/posts`, {
          params: { user: "Akshara" },
        });
        setPosts(response.data);
      } catch (err) {
        console.error("Error saving post:", err);
        alert("Error saving post.");
      }
    }
  };

  return (
    <div className="main-container">
      <div className="create-post-container">
        <div className="create-post-box">
          <h3>Create Post</h3>
          <div className="user-info">
            <div className="avatar">
              <img src={avatarImage} alt="avatar" className="avatar-img" />
            </div>
            <div className="user-details">
              <div className="username">Akshara</div>
            </div>
          </div>

          <textarea
            className="post-input"
            placeholder="What's on your mind, Akshara?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />

          <input
            className="location-input"
            type="text"
            placeholder="📍 Add location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {imagePreview && (
            <img src={imagePreview} alt="preview" className="image-preview" />
          )}

          <div className="post-icons">
            <label htmlFor="upload-image">
              📷
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>
            <button onClick={toggleEmojiPicker}>😊</button>
            <button>🎥</button>
          </div>

          {showEmojiPicker && (
            <div className="emoji-panel">
              <div className="emoji-header">
                <span>Pick Emoji</span>
                <button className="emoji-close" onClick={handleCloseEmojiPicker}>
                  ✕
                </button>
              </div>
              <div className="emoji-list">
                {["😀", "😁", "😂", "😎", "😍", "😭", "😡", "❤️", "🥳", "🤗", "🙌", "🌟", "🔥"].map(
                  (e) => (
                    <span key={e} onClick={() => handleEmojiSelect(e)}>
                      {e}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          <button
            className="post-btn"
            disabled={!postText && !imagePreview}
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>

      <div className="feed-container">
        <div className="posts-feed">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-header">
                <img src={avatarImage} alt="avatar" className="post-avatar" />
                <div className="post-username">{post.username}</div>
                <div className="post-timestamp">
                  {new Date(post.timestamp).toLocaleString()}
                </div>
              </div>
              <div className="post-content">
                <p>{post.text}</p>
                {post.image && <img src={post.image} alt="post" className="post-image" />}
                {post.location && <div className="post-location">{post.location}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
