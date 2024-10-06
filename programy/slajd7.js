const express = require('express');
const app = express();
const PORT = 3000;

// Middleware do logowania żądań
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Przechodzi do następnej funkcji
});

// Prosta trasa do sprawdzenia, że serwer działa
app.get('/', (req, res) => {
    res.send('Witaj w Express.js!');
});

// Trasa do pobierania użytkowników
app.get('/users/:id', (req, res) => {
    res.send(`Użytkownik o ID: ${req.params.id}`);
});

// Serwer nasłuchuje na porcie 3000
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
