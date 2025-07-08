'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';
import MenuNav from '../components/MenuNav/MenuNav';

export default function Home() {
	const [nomeExibicao, setNomeExibicao] = useState<string | null>(null);

	useEffect(() => {
		// Pega o nome do localStorage (se existir)
		const nome = localStorage.getItem('nomeExibicao');
		if (nome) {
			setNomeExibicao(nome);
		}
	}, []);

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center p-4 w-full">
				<DarkModeToggle />
				<div className="flex gap-2 text-sm font-medium">
					{nomeExibicao ? (
						<p className="text-principal-600 dark:text-principal-50">
							A todo bordo, marujo(a) <span className="font-bold">{nomeExibicao}</span>
							!
						</p>
					) : (
						<>
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
						</>
					)}
				</div>
			</div>

			<div className="flex text-center justify-center">
				<MenuNav />
			</div>
		</div>
	);
}
