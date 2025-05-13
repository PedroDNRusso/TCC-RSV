const express = require('express');
const rota = express.Router();

const cliente = require('./controllers/cliente'); 

rota.post('/cadastro', cliente.create); // Rota para cadastro

module.exports = rota;