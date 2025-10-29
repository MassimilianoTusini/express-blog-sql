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

// SHOW per mostrare un post tramite il suo ID
app.get('/posts:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Errore nel recupero del post:', err);
            return res.status(500).json({ error: 'Errore nel recupero del post:', err});
        }
        if (results.length === 0) {
            return res.status(404).json({error: 'Post non trovato'});
        }
        res.json(results[0]);
    });
});

// DESTROY per eliminare un post tramite il suo ID
app.delete('/posts:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DESTROY * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Errore nella cancellazione del post:', err);
            return res.status(500).json({ error: 'Errore nella cancellazione del post:', err})
        }
        res.sendStatus(204);
    });
});