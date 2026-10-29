const express = require('express');
const router = express.Router();
const usuarioController = require('./usuarioController');

// Rota GET para listar os usuários
router.get('/usuarios', usuarioController.listarUsuarios);

// Rota POST para adicionar um usuário
router.post('/usuarios', usuarioController.criarUsuario);

// Rota PUT para atualizar usuário
router.put('/usuarios/:id', usuarioController.atualizarUsuario);

module.exports = router;
