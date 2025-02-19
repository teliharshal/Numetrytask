import React, { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "../service/api";

const BlogList = ({ onEdit }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            const { data } = await fetchBlogs();
            setBlogs(data || []);  // Ensure an empty array if no blogs exist
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;

        try {
            await deleteBlog(id);
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id && blog._id !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog.id || blog._id} className="bg-white p-4 rounded-lg shadow-md border">
                            <h3 className="text-xl font-semibold">{blog.title}</h3>
                            <p className="text-gray-600 whitespace-pre-line">{blog.content}</p>
                            <p className="text-sm text-gray-500 mt-2">By {blog.author}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => onEdit(blog)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleDelete(blog.id || blog._id)}
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

export default BlogList;
