const express = require('express');
const connection = require('./db');

const app = express();

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000')
});