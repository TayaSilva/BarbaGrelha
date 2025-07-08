'use client';

import Image from 'next/image';
import HambFundo from '@/images/hamb-fundo.png';
import LogoBG from '@/images/logotipo-barbaGrelha.png';

export default function TabletLogin() {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Imagem de fundo com transparência */}
			<div className="absolute inset-0 z-0">
				<Image
					src={HambFundo}
					alt="Imagem de fundo"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50" />
			</div>

			{/* Container do card e logo */}
			<div className="relative z-10 h-full flex justify-center items-center px-4">
				{/* Logo flutuando fora do card */}
				<div className="absolute top-[95px] left-1/2 transform -translate-x-1/2 z-20">
					<Image src={LogoBG} alt="Logo" width={200} height={200} />
				</div>

				{/* Card */}
				<div className="w-full max-w-sm bg-principal-50 min-w-[480px] w-full bg-opacity-95 dark:bg-principal-200 dark:bg-opacity-95 p-8 rounded-md shadow-md backdrop-blur-md pt-28">
					<h2 className="text-2xl text-center text-imfell font-bold text-principal-800 dark:text-principal-500 mb-6">
						Entre no navio
					</h2>

					<form className="flex flex-col gap-4">
						<input
							type="email"
							placeholder="Email"
							className="p-3 rounded-md border text-principal-900  text-principal-900 bg-principal-50"
						/>

						<input
							type="password"
							placeholder="Senha"
							className="p-3 rounded-md border text-principal-900  text-principal-900 bg-principal-50"
						/>

						<div className="flex items-center justify-between text-sm text-principal-700 dark:text-carbon-700">
							<label className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									className="accent-principal-500 dark:bg-principal-300"
								/>
								Lembrar de mim
							</label>
							<a
								href="#"
								className="text-principal-500 hover:underline dark:text-carbon-800 dark:hover:text-carbon-900 transition"
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
		</div>
	);
}
