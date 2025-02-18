import React ,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const res= await axios.post("http://localhost:5000/login", { email, password });
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));
                navigate("/dashboard");

            
        } catch (error) {
            alert("Error logging in");
        }
    };

    return (
        <div className="text-white">
            <h2 className="text-center text-2xl mb-2">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
            </form>
            <p className="text-center mt-4 text-white">
                Not registered?{" "}
                <span 
                    onClick={() => navigate("/register")} 
                    className="text-blue-300 cursor-pointer hover:underline"
                >
                    Register here
                </span>
            </p>
        </div>
    )
}

export default Login;