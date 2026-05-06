const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Application Running on port number 3000');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});