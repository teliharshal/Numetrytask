import React from "react";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
            <p className="text-center">Welcome, {user.name}</p>
            <button
              onClick={ () => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
             className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                Logout
             </button>
        </div>
    );

}

export default Dashboard;