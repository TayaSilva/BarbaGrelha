// backend/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	telefone: { type: String },
	email: { type: String, required: true, unique: true },
	cpf: { type: String, required: true, unique: true },
	cep: { type: String },
	rua: { type: String },
	numero: { type: String },
	bairro: { type: String },
	cidade: { type: String },
	nomeExibicao: { type: String, required: true },
	senha: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
