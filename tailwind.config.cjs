/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {


		extend: {
			animation: {
				'spin-slow': 'spin 8s linear infinite',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif']
			},
			colors: {
				// flowbite-svelte
				primary: {
					50: '#F5F5F5',
					100: '#F5F5F5',
					200: '#ECECEC',
					300: '##d434fe',
					400: 'linear-gradient(270deg, #903aff 0%, #d434fe 56.42%, #ff26b9 99.99%, #fe34b9 100%)',
					500: '#150E28',
					600: '#141A3B',
					700: '#1D2B4B',
					800: '#1D2B4B',
					900: '#1D2B4B',

				},
			secondary: {
				100: '#F5F5F5',
				200: '#903aff',
				300: '##d434fe',
				500: '#ff26b9'

			},

			tertiary: {
				500: '#d434fe',
				600: '#903aff',
				
			}
			}

		}
	},

	plugins: [require('flowbite/plugin')],
};

module.exports = config;
