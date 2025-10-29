const mysql = require('mysql2');

// Creazione connessione al database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '13101999',
    database: 'blog'
});

// Test connessione
connection.connect(err => {

    if (err) throw err;
        
    console.log('Connessione al database effettuata');
});

module.exports = connection;
