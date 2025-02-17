import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    due_date: "",
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/tasks`)
        .then(response => {
          const existingTask = response.data.find(t => t.id === parseInt(id));
          if (existingTask) {
            setTask(existingTask);
          }
        })
        .catch(error => console.error("Error fetching task:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiCall = id
      ? axios.put(`http://localhost:5000/tasks/${id}`, task)
      : axios.post("http://localhost:5000/tasks", task);

    apiCall
      .then(() => navigate("/"))
      .catch(error => console.error("Error saving task:", error));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">{id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Due Date</label>
          <input
            type="date"
            name="due_date"
            value={task.due_date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          {id ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
