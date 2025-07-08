// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB conectado, bora! 🚀'))
	.catch((error) => console.log('Erro no MongoDB:', error));

// Rotas
app.use('/user', userRoutes);

// Rota teste
app.get('/', (req, res) => {
	res.send('Servidor rodando, tudo certo!');
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
