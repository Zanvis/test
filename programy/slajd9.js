const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Konfiguracja połączenia z bazą MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nazwa_bazy_danych'
});

// Połączenie z bazą danych
db.connect((err) => {
    if (err) {
        console.error('Błąd połączenia z bazą danych:', err);
        return;
    }
    console.log('Połączono z bazą danych MySQL.');
});

// Trasa do pobierania użytkowników
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send('Błąd podczas pobierania danych.');
        }
        res.json(result);
    });
});

// Trasa do pobierania konkretnego użytkownika
app.get('/users/:id', (req, res) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).send('Błąd podczas pobierania danych.');
        }
        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.status(404).send('Użytkownik nie znaleziony.');
        }
    });
});

// Serwer nasłuchuje na porcie 3000
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
