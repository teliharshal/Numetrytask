import React, { useEffect, useState } from "react";
import { addBlog, updateBlog } from "../service/api";

const BlogForm = ({ onBlogAdded, selectedBlog }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        if (selectedBlog) {
            setTitle(selectedBlog.title);
            setContent(selectedBlog.content);
            setAuthor(selectedBlog.author);
        } else {
            setTitle("");
            setContent("");
            setAuthor("");
        }
    }, [selectedBlog]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedBlog) {
                await updateBlog(selectedBlog.id, { title, content, author });
            } else {
                await addBlog({ title, content, author });
            }
            onBlogAdded(); // Refresh the blog list after adding/updating
        } catch (error) {
            console.error("Error adding/updating blog:", error);
        }
    };

    return (
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
        </form>
    );
};

export default BlogForm;
