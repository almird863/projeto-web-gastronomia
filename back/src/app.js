require('dotenv').config(); // Garante que o dotenv seja carregado
const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./usuarioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const origensPermitidas = [
    '#',                      // URL oficial do site quando estiver online
    'http://localhost:5500',  // Mantém o localhost para testar no PC
    'http://localhost:3000'
];

app.use(cors());

app.enable('trust proxy');

app.use(express.json());
app.use('/api', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});