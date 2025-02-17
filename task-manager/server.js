require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "task_manager",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// API Routes
app.post("/tasks", (req, res) => {
  const { title, description, status, due_date } = req.body;
  db.query(
    "INSERT INTO tasks (title, description, status, due_date) VALUES (?, ?, ?, ?)",
    [title, description, status, due_date],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task added", taskId: result.insertId });
    }
  );
});

app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.put("/tasks/:id", (req, res) => {
  const { title, description, status, due_date } = req.body;
  const { id } = req.params;
  db.query(
    "UPDATE tasks SET title=?, description=?, status=?, due_date=? WHERE id=?",
    [title, description, status, due_date, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task updated" });
    }
  );
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tasks WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task deleted" });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
