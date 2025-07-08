import type { Metadata } from 'next';
import './globals.css';

// importa as fontes
import {
	IM_Fell_Double_Pica,
	League_Spartan,
	Quicksand,
} from 'next/font/google';

// configura cada uma
const imFell = IM_Fell_Double_Pica({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-imfell',
	display: 'swap',
});

const leagueSpartan = League_Spartan({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-league',
	display: 'swap',
});

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-quicksand',
	display: 'swap',
});

// metadados do site
export const metadata: Metadata = {
	title: 'Barbagrelha',
	description: 'Lanchonete Barbagrelha',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="pt"
			className={`transition-colors duration-500 ${imFell.variable} ${leagueSpartan.variable} ${quicksand.variable}`}
		>
			<body className="bg-principal-100 dark:bg-principal-900 transition-colors duration-500 font-quick">
				{children}
			</body>
		</html>
	);
}
