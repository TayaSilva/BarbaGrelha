'use client';

import Image from 'next/image';
import HambFundo2 from '@/images/hamb-fundo-2.png';
import LogoBG from '@/images/logotipo-barbaGrelha.png';
import { useState } from 'react';

export default function MobileRegister() {
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
		setFormData({ ...formData, [e.target.name]: e.target.value });
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
		<div className="relative h-screen w-full overflow-hidden">
			{/* Imagem de fundo com transparência */}
			<div className="absolute inset-0 z-0">
				<Image
					src={HambFundo2}
					alt="Imagem de fundo"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50" />
			</div>

			{/* Container do card e logo */}
			<div className="w-full h-full flex justify-center items-center z-10 relative">
				<div className="relative w-full max-w-md">
					{/* Logo */}
					<div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 z-10">
						<Image src={LogoBG} alt="Logo" width={120} height={120} />
					</div>

					<form className="flex bg-principal-50  justify-center shadow-md dark:shadow-principal-700 p-6 pt-20 rounded-md dark:bg-principal-200 flex-col gap-4 w-full">
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
									value={formData.cep}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="rua"
									placeholder="Rua"
									onChange={handleChange}
									value={formData.rua}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="numero"
									placeholder="Número"
									onChange={handleChange}
									value={formData.numero}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="bairro"
									placeholder="Bairro"
									onChange={handleChange}
									value={formData.bairro}
									className="p-3 rounded-md border text-principal-900 bg-principal-50"
								/>
								<input
									name="cidade"
									placeholder="Cidade"
									onChange={handleChange}
									value={formData.cidade}
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

						<div className="mt-2 flex flex-col items-center gap-4">
							{/* Botão Voltar */}
							{step > 1 && (
								<button
									type="button"
									onClick={prevStep}
									className="bg-principal-500 text-white py-2 px-4 rounded-md hover:bg-principal-600 transition-colors"
								>
									Voltar
								</button>
							)}

							{/* Texto de login */}
							{step === 1 && (
								<p className="text-sm text-center text-principal-700 dark:text-carbon-800">
									Já tem uma conta?{' '}
									<a
										href="/login"
										className="text-principal-500 hover:underline hover:text-principal-700"
									>
										Faça login
									</a>
								</p>
							)}

							{/* Botão Próximo ou Cadastrar */}
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
					</form>
				</div>
			</div>
		</div>
	);
}
