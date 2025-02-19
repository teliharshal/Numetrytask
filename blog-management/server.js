// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blogDB'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// API Endpoints
app.post('/blogs', (req, res) => {
    const { title, content, author } = req.body;
    const sql = 'INSERT INTO blogs (title, content, author) VALUES (?, ?, ?)';
    db.query(sql, [title, content, author], (err, result) => {
        if (err) throw err;
        res.status(201).json({ id: result.insertId, title, content, author });
    });
});

app.get('/blogs', (req, res) => {
    db.query('SELECT * FROM blogs', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/blogs/:id', (req, res) => {
    const sql = 'SELECT * FROM blogs WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});


app.put('/blogs/:id', (req, res) => {
    const { title, content, author } = req.body;
    const blogId = req.params.id;

    const sql = 'UPDATE blogs SET title = ?, content = ?, author = ? WHERE id = ?';
    
    db.query(sql, [title, content, author, blogId], (err, result) => {
        if (err) {
            console.error("❌ Error updating blog:", err);
            return res.status(500).json({ error: 'Failed to update blog' });
        }
        
        console.log("✅ Update Result:", result);

        if (result.affectedRows === 0) {
            console.warn("⚠️ Blog not found in database.");
            return res.status(404).json({ error: "Blog not found" });
        }

        res.json({ message: '✅ Blog updated successfully', updatedBlog: { id: blogId, title, content, author } });
    });
});




app.delete('/blogs/:id', (req, res) => {
    const sql = 'DELETE FROM blogs WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error("Error deleting the blog:", err);
            return res.status(500).json({ error: 'Failed to delete the blog' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.json({ message: 'Blog deleted successfully' });
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});