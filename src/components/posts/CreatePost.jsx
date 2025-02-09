import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown"; 
const BASE_URL = import.meta.env.VITE_BACKEND_URL;


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [aiPrompt, setAiPrompt] = useState(""); 
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
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
      const response = await axios.post(`${BASE_URL}/posts/createPost`, {
        title,
        body,
        tags: tags.split(",").map((tag) => tag.trim()),
        id: localStorage.getItem("userId"),
      });
      console.log("Post created:", response.data);
      navigate("/feed");
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  const handleGenerateAIContent = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/ai/generate`, { prompt: aiPrompt });
      const generatedContent = response.data.content;
      console.log(generatedContent);
      setBody(generatedContent); 
      setIsDialogOpen(false); 
    } catch (error) {
      console.error("Error generating content:", error.message);
    }
  };

  return (
    <div className="border border-red-300 max-w-2xl mx-auto bg-transparent-300 p-6 rounded-lg shadow-md mt-24">
      <h2 className="text-2xl font-bold mb-6 flex justify-between items-center">
        Create a New Post
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition"
          onClick={() => setIsDialogOpen(true)} 
        >
          Generate using AI
        </button>
      </h2>
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

      

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h3 className="text-xl mb-4">Enter AI Prompt</h3>
            <textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="What would you like the AI to generate?"
              className="w-full border p-2 rounded mb-4"
              rows="4"
              required
            />
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600"
                onClick={() => setIsDialogOpen(false)} 
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                onClick={handleGenerateAIContent} 
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
