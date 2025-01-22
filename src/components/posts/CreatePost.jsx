import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "doctor") {
      navigate("/unauthorized");
    }
  }, [role, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/posts/createPost", {
        title,
        body,
        tags: tags.split(",").map((tag) => tag.trim()),
        id: localStorage.getItem("userId"),
      });
      console.log("Post created:", response.data);
      navigate("/feed")
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <div className="border border-red-300 max-w-2xl mx-auto bg-transparent-300 p-6 rounded-lg shadow-md mt-24">
      <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          rows="6"
          required
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
