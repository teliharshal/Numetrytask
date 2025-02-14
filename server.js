const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request body

// MySQL Database Connection using a Pool (better performance & auto-reconnect)
const db = mysql.createPool({
  connectionLimit: 10, // Allow up to 10 connections
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "employee_db",
});

// Test database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database");
    connection.release(); // Release connection after checking
  }
});

// 🟢 GET: Fetch all employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 🟢 POST: Add a new employee
app.post("/employees", (req, res) => {
  const { name, email, position, salary } = req.body;
  if (!name || !email || !position || !salary) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  const sql = "INSERT INTO employees (name, email, position, salary) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, position, salary], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, name, email, position, salary });
  });
});

// 🟢 PUT: Update an employee
app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, position, salary } = req.body;
  if (!name || !email || !position || !salary) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  const sql = "UPDATE employees SET name=?, email=?, position=?, salary=? WHERE id=?";
  db.query(sql, [name, email, position, salary, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee Updated Successfully" });
  });
});

// 🟢 DELETE: Remove an employee
app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM employees WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee Deleted Successfully" });
  });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
