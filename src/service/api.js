import axios from "axios";

const API_URL = "http://localhost:5000"; // Adjust if your backend is running on a different port

// Function to delete a blog by ID

export const fetchBlogs = () => axios.get(`${API_URL}/blogs`);
export const addBlog = (blogData) => axios.post(`${API_URL}/blogs`, blogData);
export const updateBlog = (id, blogData) => axios.put(`${API_URL}/blogs/${id}`, blogData);
export const deleteBlog = async (id) => {
    return await axios.delete(`${API_URL}/blogs/${id}`);
};
