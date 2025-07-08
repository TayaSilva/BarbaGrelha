/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				imfell: ['var(--font-imfell)'],
				league: ['var(--font-league)'],
				quick: ['var(--font-quicksand)'],
			},
			colors: {
				principal: {
					50: '#f5f3ef',
					100: '#e6ddcd',
					200: '#cbbca5',
					300: '#b19b7c',
					400: '#8e744e',
					500: '#3E2C1C',
					600: '#362715',
					700: '#2d2011',
					800: '#24190d',
					900: '#1c1209',
				},
				carbon: {
					50: '#f9f9f9',
					100: '#e0e0e0',
					200: '#c7c7c7',
					300: '#aeaeae',
					400: '#959595',
					500: '#7c7c7c',
					600: '#606060',
					700: '#3d3d3d',
					800: '#1e1e1e',
					900: '#0f0f0f',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
