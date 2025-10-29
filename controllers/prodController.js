const connection = require('../db');

// INDEX per mostrare tutti i post
function index(req, res) {
    console.log("➡️ Entrato in prodController.index");
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {

        if (err) return res.status(500).json({ error: 'Errore nel recupero dei post'});
        
        res.json(results);
    });
};

// SHOW per mostrare un post tramite il suo ID
function show(req, res) {
    const { id } = req.params;
    const sql = 'SELECT * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {

        if (err) return res.status(500).json({ error: 'Errore nel recupero del post'});

        if (results.length === 0) {
            return res.status(404).json({error: 'Post non trovato'});
        }
        res.json(results[0]);
    });
};

// DESTROY per eliminare un post tramite il suo ID
function destroy(req, res) {
    const id = req.params.id;
    const sql = 'DELETE FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {

        if (err) return res.status(500).json({ error: 'Errore nella cancellazione del post'})

        res.sendStatus(204);
    });
};

module.exports = { index, show, destroy };
