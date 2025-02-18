import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:5000/register", { name, email, password });
            alert("User registered successfully!");
            navigate("/login");
        } catch (error) {
            alert("Error registering user");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded" onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
            </form>
        </div>
    );
};

export default Register;
