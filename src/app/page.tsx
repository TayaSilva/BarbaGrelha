import Link from 'next/link';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';
import MenuNav from '../components/MenuNav/MenuNav';

export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center p-4 w-full">
				<DarkModeToggle />
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
			</div>

			<div className="flex text-center justify-center">
				<MenuNav />
			</div>
		</div>
	);
}
