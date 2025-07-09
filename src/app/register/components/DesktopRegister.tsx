'use client';

import { useState } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import Image from 'next/image';
import HambFundo2 from '@/images/hamb-fundo-2.png';
import LogoBG from '@/images/logotipo-barbaGrelha.png';
import Link from 'next/link';
import axios from 'axios';

export default function DesktopRegister() {
	const [step, setStep] = useState(1);

	const [formData, setFormData] = useState({
		nome: '',
		telefone: '',
		email: '',
		cpf: '',
		cep: '',
		rua: '',
		numero: '',
		bairro: '',
		cidade: '',
		nomeExibicao: '',
		senha: '',
		confirmarSenha: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Quando mudar o cep, tenta buscar o endereço
		if (name === 'cep' && value.length === 8) {
			buscarEnderecoPorCep(value);
		}
	};

	const buscarEnderecoPorCep = async (cep: string) => {
		try {
			const res = await axios.get(`http://localhost:3001/user/cep/${cep}`);
			const { rua, bairro, cidade } = res.data;

			setFormData((prev) => ({
				...prev,
				rua: rua || '',
				bairro: bairro || '',
				cidade: cidade || '',
			}));
		} catch (error) {
			console.log('Erro ao buscar CEP', error);
		}
	};

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	const validarSenha = (senha: string) => {
		return (
			senha.length >= 8 &&
			/[A-Z]/.test(senha) &&
			/[!@#$%^&*(),.?":{}|<>]/.test(senha)
		);
	};

	return (
		<div className="flex h-screen relative">
			{/* Toggle */}
			<div className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center z-10">
				<DarkModeToggle />
				<Link
					href="/"
					className="text-principal-100 dark:text-principal-50 hover:underline transition-colors duration-200"
				>
					Voltar ao convés
				</Link>
			</div>

			{/* Formulário */}
			<div className="w-1/2 flex justify-center items-center">
				<div className="relative w-full max-w-md">
					{/* Logo */}
					<div className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-10">
						<Image src={LogoBG} alt="Logo" width={150} height={150} />
					</div>

					<form className="flex bg-principal-50 shadow-md dark:shadow-principal-700 p-10 pt-20 rounded-md dark:bg-principal-200 flex-col gap-4 w-full">
						<h2 className="text-2xl text-center text-imfell font-bold text-principal-800 dark:text-principal-500 mb-6">
							Suba a bordo do navio
						</h2>

						{step === 1 && (
							<>
								<input
									name="nome"
									placeholder="Nome completo"
									onChange={handleChange}
									value={formData.nome}
									className="p-3 rounded-md border  text-principal-900 bg-principal-50"
								/>
								<input
									name="telefone"
									placeholder="Telefone"
									onChange={handleChange}
									value={formData.telefone}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="email"
									placeholder="Email"
									onChange={handleChange}
									value={formData.email}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="cpf"
									placeholder="CPF"
									onChange={handleChange}
									value={formData.cpf}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
							</>
						)}

						{step === 2 && (
							<>
								<input
									name="cep"
									placeholder="CEP"
									onChange={handleChange}
									onBlur={() => buscarEnderecoPorCep(formData.cep)}
									value={formData.cep}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="rua"
									placeholder="Rua"
									value={formData.rua}
									onChange={handleChange}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>

								<input
									name="bairro"
									placeholder="Bairro"
									value={formData.bairro}
									readOnly
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>

								<input
									name="cidade"
									placeholder="Cidade"
									value={formData.cidade}
									readOnly
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>

								<input
									name="numero"
									placeholder="Número"
									onChange={handleChange}
									value={formData.numero}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
							</>
						)}

						{step === 3 && (
							<>
								<input
									name="nomeExibicao"
									placeholder="Como devemos te chamar, marujo(a)?"
									onChange={handleChange}
									maxLength={10}
									value={formData.nomeExibicao}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="senha"
									type="password"
									placeholder="Senha"
									onChange={handleChange}
									value={formData.senha}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="confirmarSenha"
									type="password"
									placeholder="Confirmar senha"
									onChange={handleChange}
									value={formData.confirmarSenha}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>

								<ul className="text-sm text-principal-700 dark:text-carbon-800 pl-4 list-disc">
									<li>Mínimo 8 caracteres</li>
									<li>Pelo menos 1 letra maiúscula</li>
									<li>Pelo menos 1 caractere especial</li>
								</ul>
							</>
						)}

						<div className="flex mt-8 justify-between items-center">
							{step === 1 && (
								<p className="text-sm text-center text-principal-700 dark:text-carbon-800 mt-6">
									Já tem uma conta?{' '}
									<a
										href="/login"
										className="text-principal-500 hover:underline hover:text-principal-700"
									>
										Faça login
									</a>
								</p>
							)}

							{step > 1 && (
								<button
									type="button"
									onClick={prevStep}
									className="bg-principal-500 text-white py-2 px-4 rounded-md hover:bg-principal-600 transition-colors"
								>
									Voltar
								</button>
							)}

							{step < 3 ? (
								<button
									type="button"
									onClick={nextStep}
									className="bg-principal-500 text-white py-2 px-4 rounded-md hover:bg-principal-600 transition-colors"
								>
									Próximo
								</button>
							) : (
								<button
									type="submit"
									disabled={
										!validarSenha(formData.senha) ||
										formData.senha !== formData.confirmarSenha
									}
									className={`py-2 px-4 rounded-md transition-colors text-white ${
										validarSenha(formData.senha) &&
										formData.senha === formData.confirmarSenha
											? 'bg-principal-500 hover:bg-principal-600'
											: 'bg-gray-400 cursor-not-allowed'
									}`}
								>
									Cadastrar
								</button>
							)}
						</div>

						{step === 3 && formData.senha !== formData.confirmarSenha && (
							<p className="text-red-600 text-sm mt-2">As senhas não coincidem</p>
						)}
					</form>
				</div>
			</div>

			{/* Imagem da direita */}
			<div className="w-1/2 relative">
				<Image
					src={HambFundo2}
					alt="Imagem de fundo"
					fill
					className="object-cover"
				/>
			</div>
		</div>
	);
}
