const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API rodando com sucesso!' });
});

app.use('/produtos', produtoRoutes);
module.exports = app;