// backend/routes/user.js

const express = require('express');
const bcrypt = require('bcryptjs');
const axios = require('axios');
const User = require('../models/user');

const router = express.Router();

// 📌 ROTA DE CADASTRO
router.post('/register', async (req, res) => {
	try {
		const {
			nome,
			telefone,
			email,
			cpf,
			cep,
			rua,
			numero,
			bairro,
			cidade,
			nomeExibicao,
			senha,
		} = req.body;

		const userExists = await User.findOne({ $or: [{ email }, { cpf }] });
		if (userExists) {
			return res.status(400).json({ message: 'Email ou CPF já cadastrado' });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(senha, salt);

		const newUser = new User({
			nome,
			telefone,
			email,
			cpf,
			cep,
			rua,
			numero,
			bairro,
			cidade,
			nomeExibicao,
			senha: hashedPassword,
		});

		await newUser.save();

		res.status(201).json({ message: 'Usuário criado com sucesso!' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Erro no servidor' });
	}
});

// 📌 ROTA PARA CONSULTAR O CEP
router.get('/cep/:cep', async (req, res) => {
	const { cep } = req.params;

	try {
		const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
		const data = response.data;

		if (data.erro) {
			return res.status(404).json({ message: 'CEP não encontrado' });
		}

		// ⚠️ Aqui mapeamos os campos corretamente pro front entender
		res.json({
			rua: data.logradouro || '',
			bairro: data.bairro || '',
			cidade: data.localidade || '',
			uf: data.uf || '',
			cep: data.cep || '',
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Erro ao buscar o CEP' });
	}
});

// Rota de login
router.post('/login', async (req, res) => {
	const { email, senha } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: 'Email ou senha inválidos' });
		}

		const senhaValida = await bcrypt.compare(senha, user.senha);
		if (!senhaValida) {
			return res.status(400).json({ message: 'Email ou senha inválidos' });
		}

		res.json({
			message: 'Login feito com sucesso!',
			user: {
				email: user.email,
				nomeExibicao: user.nomeExibicao,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Erro no servidor' });
	}
});

module.exports = router;
