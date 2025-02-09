import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;


const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (showComments) {
      const fetchComments = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/comments/getCommentsByPost/${postId}`
          );
          setComments(response.data.comments);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching comments:", error);
          setLoading(false);
        }
      };
      fetchComments();
    }
  }, [showComments, postId]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const response = await axios.post(
        `${BASE_URL}/comments/addComment`,
        {
          userId,
          postId,
          body: newComment,
        }
      );
      setComments([response.data.comment, ...comments]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `${BASE_URL}/comments/deleteComment/${commentId}`
      );
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowComments(true)}
        className="text-white bg-red-600 hover:bg-red-700 font-semibold py-2 px-4 rounded-md"
      >
        Comment
      </button>

      {showComments && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setShowComments(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg w-3/4 max-w-4xl max-h-4/5 overflow-auto shadow-lg relative"
          >
            <h3 className="text-xl font-bold mb-4">Comments</h3>

            <button
              onClick={() => setShowComments(false)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {loading ? (
              <p>Loading comments...</p>
            ) : comments.length === 0 ? (
              <p className="text-gray-600">
                No reactions!! Be the first one to comment.. hehe
              </p>
            ) : (
              <ul className="space-y-4">
                {comments.map((comment) => (
                  <li
                    key={comment._id}
                    className="flex items-start space-x-4 border-b border-gray-200 pb-4"
                  >
                    <img
                      src={
                        // comment.userId.profilePic ||
                        "https://via.placeholder.com/40"
                      }
                      // alt={comment.userId.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <strong className="font-semibold text-gray-800">
                            {comment.userId.name}
                          </strong>
                          <p className="text-sm text-gray-500">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </p>
                        </div>

                        {comment.userId._id === userId && (
                          <button
                            onClick={() => handleDeleteComment(comment._id)}
                            className="text-red-600 hover:text-red-800 text-sm font-semibold"
                          >
                            Delete
                          </button>
                        )}
                      </div>

                      <p className="mt-2 text-gray-500 font-light">
                        {comment.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex items-center space-x-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                onClick={handleAddComment}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
