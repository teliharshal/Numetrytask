const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const port = 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

app.use(express.json()); // Enable JSON parsing
app.use(cors());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "userdb"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// ✅ POST /api/users - Register User
app.post("/api/users", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // ✅ Check if email already exists
      db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) {
          return res.status(500).json({ message: "Database error", error: err });
        }
  
        if (results.length > 0) {
          return res.status(400).json({ message: "Email already exists" });
        }
  
        // ✅ If email is unique, insert user
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        
        db.query(sql, [name, email, hashedPassword], (err, result) => {
          if (err) {
            return res.status(500).json({ message: "Error inserting user", error: err });
          }
  
          res.status(201).json({ message: "User registered successfully", userId: result.insertId });
        });
      });
  
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  });

  app.get("/api/users", (req, res) => {  // ✅ Now it matches "/api/users"
    db.query("SELECT id, name, email FROM users", (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });
  
      res.json(results);
    });
  });

  // ✅ PUT /api/users/:id - Update user details
app.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
  
    const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    db.query(sql, [name, email, id], (err, result) => {
      if (err) return res.status(500).json({ message: "Error updating user" });
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ message: "User updated successfully" });
    });
  });

  // ✅ DELETE /api/users/:id - Delete a user
app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
  
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ message: "Error deleting user" });
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ message: "User deleted successfully" });
    });
  });
  



  