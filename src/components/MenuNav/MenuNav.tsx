'use client';

import Link from 'next/link';

const menuItems = [
	{ label: 'Cardápio', href: '#cardapio' },
	{ label: 'Sobre nós', href: '#sobre' },
	{ label: 'Contato', href: '#contato' },
	{ label: 'Reserva', href: '#reserva' },
];

export default function MenuNav() {
	return (
		<div className="flex gap-[200px] p-4 rounded-md  transition-colors duration-500">
			{menuItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className="
        text-principal-700 uppercase font-imfell dark:text-principal-50 font-medium
        relative
        hover:text-principal-500 dark:hover:text-principal-50
        transition-colors duration-800 ease-in-out
        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full
        after:bg-principal-300 after:scale-x-0 after:origin-right  
        after:transition-transform after:duration-700 after:ease-in-out
        hover:after:scale-x-100 hover:after:origin-left
      "
				>
					{item.label}
				</Link>
			))}
		</div>
	);
}
