'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = window.document.documentElement;
		const savedTheme = localStorage.getItem('theme');

		if (
			savedTheme === 'dark' ||
			(!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			root.classList.add('dark');
			setIsDark(true);
		} else {
			root.classList.remove('dark');
			setIsDark(false);
		}
	}, []);

	const toggleTheme = () => {
		const root = window.document.documentElement;
		const newTheme = isDark ? 'light' : 'dark';
		root.classList.toggle('dark', !isDark);
		localStorage.setItem('theme', newTheme);
		setIsDark(!isDark);
	};

	return (
		<button
			onClick={toggleTheme}
			className={`p-2 rounded-full transition ${
				isDark
					? 'bg-principal-100 text-black hover:bg-principal-200'
					: 'bg-principal-600 text-white hover:bg-principal-900'
			}`}
			aria-label="Alternar modo claro/escuro"
		>
			{isDark ? (
				// Ícone de sol
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
					/>
				</svg>
			) : (
				// Ícone de lua
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.5 9.79z" />
				</svg>
			)}
		</button>
	);
}
