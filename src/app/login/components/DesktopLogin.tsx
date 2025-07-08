'use client';

import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import Image from 'next/image';
import HambFundo from '@/images/hamb-fundo.png';
import LogoBG from '@/images/logotipo-barbaGrelha.png';

export default function DesktopLogin() {
	return (
		<div className="flex h-screen relative">
			{/* DarkModeToggle fixado no topo esquerdo */}
			<div className="absolute top-4 left-4 z-10">
				<DarkModeToggle />
			</div>

			{/* LADO ESQUERDO */}
			<div className="w-1/2 flex justify-center items-center">
				<div className="relative w-full max-w-md">
					{/* Logo sobre o card */}
					<div className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-10">
						<Image src={LogoBG} alt="Logo" width={150} height={150} />
					</div>

					<form className="flex bg-principal-50 shadow-md dark:shadow-principal-700 p-10 pt-20 rounded-md dark:bg-principal-200 flex-col gap-4 w-full">
						<h2 className="text-2xl text-center text-imfell font-bold text-principal-800 dark:text-principal-500 mb-6">
							Entre no navio
						</h2>

						<input
							type="email"
							placeholder="Email"
							className="p-3 rounded-md border text-principal-900 bg-principal-50"
						/>

						<input
							type="password"
							placeholder="Senha"
							className="p-3 rounded-md border text-principal-900 bg-principal-50"
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
