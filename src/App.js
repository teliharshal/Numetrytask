import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/blogs";

const App = () => {
    const [blogs, setBlogs] = useState([]); // Store all blogs
    const [selectedBlog, setSelectedBlog] = useState(null); // Store selected blog for editing
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    // Fetch Blogs from Backend
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(API_URL);
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Add or Update Blog
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedBlog) {
                console.log("Updating Blog ID:", selectedBlog.id);
                const response = await axios.put(`http://localhost:5000/blogs/${selectedBlog.id}`, { 
                    title, 
                    content, 
                    author 
                });
                console.log("Update Response:", response.data);
            } else {
                console.log("Adding New Blog");
                const response = await axios.post("http://localhost:5000/blogs", { 
                    title, 
                    content, 
                    author 
                });
                console.log("Add Response:", response.data);
            }
            resetForm();
            fetchBlogs();
        } catch (error) {
            console.error("Error saving blog:", error);
        }
    };
    

    // Delete a Single Blog
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;
        try {
            await axios.delete(`${API_URL}/${id}`);
            setBlogs(blogs.filter(blog => blog.id !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    // Set Blog Data for Editing
    const handleEdit = (blog) => {
        setSelectedBlog(blog);
        setTitle(blog.title);
        setContent(blog.content);
        setAuthor(blog.author);
    };

    // Reset Form Fields
    const resetForm = () => {
        setSelectedBlog(null);
        setTitle("");
        setContent("");
        setAuthor("");
    };

    return (
        <div className="container mx-auto p-4">
            {/* Blog Form */}
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold mb-4">{selectedBlog ? "Edit Blog" : "Add Blog"}</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    required
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    {selectedBlog ? "Update Blog" : "Add Blog"}
                </button>
                {selectedBlog && (
                    <button type="button" onClick={resetForm} className="ml-2 bg-gray-400 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                )}
            </form>

            {/* Blog List */}
            <h2 className="text-2xl font-bold mb-4">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md border">
                            <h3 className="text-xl font-semibold">{blog.title}</h3>
                            <p className="text-gray-600 whitespace-pre-line">{blog.content}</p>
                            <p className="text-sm text-gray-500 mt-2">By {blog.author}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleEdit(blog)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleDelete(blog.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No blogs available.</p>
                )}
            </div>
        </div>
    );
};

export default App;
