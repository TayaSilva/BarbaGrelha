'use client';

import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import Image from 'next/image';
import HambFundo from '@/images/hamb-fundo.png';
import LogoBG from '@/images/logotipo-barbaGrelha.png';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DesktopLogin() {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState('');

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setErro('');

		try {
			const response = await fetch('http://localhost:3001/user/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, senha }),
			});

			if (!response.ok) {
				const data = await response.json();
				setErro(data.message || 'Erro ao fazer login');
				return;
			}

			const data = await response.json();

			localStorage.setItem('nomeExibicao', data.user.nomeExibicao);

			// Vai pra página inicial
			router.push('/');
		} catch (err) {
			console.error(err);
			setErro('Erro ao conectar com o servidor');
		}
	};

	return (
		<div className="flex h-screen relative">
			{/* DarkModeToggle fixado no topo esquerdo */}
			<div className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center z-10">
				<DarkModeToggle />
				<Link
					href="/"
					className="text-principal-100 dark:text-principal-50 hover:underline transition-colors duration-200"
				>
					Voltar ao convés
				</Link>
			</div>

			{/* LADO ESQUERDO */}
			<div className="w-1/2 flex justify-center items-center">
				<div className="relative w-full max-w-md">
					{/* Logo sobre o card */}
					<div className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-10">
						<Image src={LogoBG} alt="Logo" width={150} height={150} />
					</div>

					<form
						onSubmit={handleLogin}
						className="flex bg-principal-50 shadow-md dark:shadow-principal-700 p-10 pt-20 rounded-md dark:bg-principal-200 flex-col gap-4 w-full"
					>
						<h2 className="text-2xl text-center text-imfell font-bold text-principal-800 dark:text-principal-500 mb-6">
							Entre no navio
						</h2>

						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="p-3 rounded-md border text-principal-900 bg-principal-50"
							required
						/>

						<input
							type="password"
							placeholder="Senha"
							value={senha}
							onChange={(e) => setSenha(e.target.value)}
							className="p-3 rounded-md border text-principal-900 bg-principal-50"
							required
						/>

						<div className="flex items-center justify-between text-sm text-principal-700 dark:text-carbon-700">
							<label className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									className="accent-principal-500 hover:principal-600 bg-principal-500 dark:bg-principal-300"
								/>
								Lembrar de mim
							</label>
							<a
								href="#"
								className="text-principal-500 hover:underline hover:text-principal-700 dark:text-carbon-800 dark:hover:text-carbon-900 transition"
							>
								Esqueceu a senha?
							</a>
						</div>

						{erro && <p className="text-red-600 text-sm text-center">{erro}</p>}

						<button
							type="submit"
							className="bg-principal-500 text-white py-3 rounded-md hover:bg-principal-600 transition-colors"
						>
							Entrar
						</button>
					</form>
				</div>
			</div>

			{/* LADO DIREITO */}
			<div className="w-1/2 relative">
				<Image
					src={HambFundo}
					alt="Imagem de fundo"
					fill
					className="object-cover"
				/>
			</div>
		</div>
	);
}
