import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/l");
  }

  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/l");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/posts/allPosts"
        );
        setPosts(response.data.posts || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      console.log("PostID: ", postId);
      console.log("UserID: ", userId);
      const response = await axios.put(
        `http://localhost:8080/posts/likePost/${postId}`,
        { userId }
      );
      const updatedPost = response.data.post;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: updatedPost.likes } : post
        )
      );
    } catch (error) {
      console.error("Error liking the post:", error.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5 text-lg font-medium text-gray-600">
        Loading posts...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700">Blog Feed</h1>
        <button
          onClick={handleLogout}
          className="text-red-600 font-medium hover:underline"
        >
          Logout
        </button>
      </div>

      <div className="flex justify-center">
        <div className="max-w-2xl w-full">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-200 w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                    {post.userId && post.userId.name
                      ? post.userId.name[0].toUpperCase()
                      : "N/A"}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">
                      {post.userId && post.userId.name
                        ? post.userId.name
                        : "Anonymous"}
                    </p>
                    <p className="text-sm text-gray-500">{post.createdAt}</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-2">{post.body}</p>
                {post.media && post.mediaType === "image" && (
                  <img
                    src={post.media}
                    alt="Post Media"
                    className="rounded-md mb-4 max-h-64 object-cover w-full"
                  />
                )}
                {post.media && post.mediaType === "video" && (
                  <video
                    src={post.media}
                    controls
                    className="rounded-md mb-4 max-h-64 w-full"
                  />
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags &&
                    post.tags.length > 0 &&
                    post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-blue-100 text-blue-600 rounded-full px-4 py-1 border border-blue-300"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    👍 {post.likes ? post.likes.length : 0}
                  </span>
                  <button
                    onClick={() => handleLike(post._id)}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {post.likes && post.likes.includes(userId)
                      ? "Unlike"
                      : "Like"}
                  </button>
                  <button className="text-blue-600 font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;
