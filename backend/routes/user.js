// backend/routes/user.js

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

// Rota de cadastro (register)
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

		// Verifica se já existe usuário com email ou cpf iguais
		const userExists = await User.findOne({ $or: [{ email }, { cpf }] });
		if (userExists) {
			return res.status(400).json({ message: 'Email ou CPF já cadastrado' });
		}

		// Criptografa a senha
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(senha, salt);

		// Cria o novo usuário com a senha criptografada
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
