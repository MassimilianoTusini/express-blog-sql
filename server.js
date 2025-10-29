const express = require('express');
const connection = require('./db');

const app = express();
app.use(express.json());

// INDEX per mostrare tutti i post
app.get('/posts', (req, res) => {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Errore nel recuper dei post:', err);
            return res.status(500).json({ error: 'Errore nel recupero dei post'})
        }
        res.json(results);
    });
});
