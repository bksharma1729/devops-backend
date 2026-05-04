const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Node.js Project: Deploying via GitHub Actions</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});