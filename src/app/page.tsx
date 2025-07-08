'use client';

import Link from 'next/link';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';
import MenuNav from '../components/MenuNav/MenuNav';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const [nomeExibicao, setNomeExibicao] = useState<string | null>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const nome = localStorage.getItem('nomeExibicao');
			setNomeExibicao(nome);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('nomeExibicao');
		setNomeExibicao(null);
		router.push('/');
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center p-4 w-full">
				<DarkModeToggle />

				{nomeExibicao ? (
					<div className="flex gap-4 items-center text-principal-600 dark:text-principal-50">
						<span className="text-sm font-medium">
							A todo vapor, marujo(a) <strong>{nomeExibicao}</strong>!
						</span>
						<button
							onClick={handleLogout}
							className="text-xs text-principal-500 hover:underline hover:text-principal-700 dark:text-carbon-300 dark:hover:text-white transition"
						>
							Sair
						</button>
					</div>
				) : (
					<div className="flex gap-2 text-sm font-medium">
						<Link
							href="/login"
							className="text-principal-600 dark:text-principal-50 hover:underline transition-colors duration-200"
						>
							Entre no navio
						</Link>
						<span className="text-principal-600 dark:text-principal-50">ou</span>
						<Link
							href="/register"
							className="text-principal-600 dark:text-principal-50 hover:underline transition-colors duration-200"
						>
							Cadastre-se
						</Link>
					</div>
				)}
			</div>

			<div className="flex text-center justify-center">
				<MenuNav />
			</div>
		</div>
	);
}
