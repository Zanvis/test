const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Witaj w Express.js!');
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});
