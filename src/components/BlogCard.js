import React from "react";

const BlogCard = ({ blog, onEdit, onDelete }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border">
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
                    onClick={() => onDelete(blog.id || blog._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
