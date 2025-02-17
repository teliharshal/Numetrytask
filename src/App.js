import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Task Management System</h1>
        <nav className="flex justify-center space-x-4 mb-6">
          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">Task List</Link>
          <Link to="/add" className="px-4 py-2 bg-green-500 text-white rounded">Add Task</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

