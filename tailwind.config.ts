/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
	],

	theme: {
		screens: {
			'2xl': '1740px',
			xl: '1400px',
			lg: '1100px',
			md: '800px',
			sm: '576px',
			xs: '575px',
		},
		fontFamily: {
			blazeface: ['ohno-blazeface'],
			body: ['lft-etica'],
			display: ['ohno-blazeface'],
			etica: ['lft-etica'],
			sans: ['lft-etica'],
			roboto: ['roboto'],
			lores: 'lores-15-bold-alt-oakland',
			heading: ['Roboto', 'sans-serif'],
		},
		container: {
			padding: '15px',
			center: true,
			maxWidth: '1740px',
		},
		colors: {
			black: '#141414',
			grey_dark: '#232323',
			grey_dark2: '#434343',
			silver_dark: '#636363',
			silver_light: '#9B9B9B',
			grey_light: '#DCDCDC',
			grey_light2: '#F2F2F2',
			white2: '#F1F1F1',
			white: '#FFFFFF',
			green: '#00E2BA',
			red_light: '#ed405e',
			gold: '#B99F57',
			orange: '#eb714c',
			orange_hover: '#f7cf83',
			primary_dark: '#1f344f',
			primary_hover: '#61a1e1',
			primary_light: '#d4fcfc',
		},

		fontSize: {
			xs: ['12px', '18px'],
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			md: ['18px', '26px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
			'2xl': ['30px', '38px'],
			'3xl': ['38px', '46px'],
			'4xl': ['48px', '52px'],
		},
		extend: {
			boxShadow: {
				sm: '0px 4px 10px rgba(0, 0, 0, 0.15)',
			},
		},
		animation: {
			'slide-in': 'slide-in 0.3s ease-out',
			'slide-in-reverse': 'slide-in-reverse 0.3s ease-out',
			'slide-out': 'slide-out 0.4s ease-out',
			'slide-out-reverse': 'slide-out-reverse 0.4s ease-out',
			'fade-in': 'fade-in 0.2s ease-out',
			'fade-out': 'fade-out 0.2s ease-out',
		},
		keyframes: {
			'slide-in': {
				'0%': {
					transform: 'translateX(100%)',
					opacity: 0,
				},
				'100%': {
					transform: 'translateX(0)',
					opacity: 1,
				},
			},
			'slide-in-reverse': {
				'0%': {
					transform: 'translateX(-100%)',
					opacity: 0,
				},
				'100%': {
					transform: 'translateX(0)',
					opacity: 1,
				},
			},
			'slide-out': {
				'0%': {
					transform: 'translateX(0)',
					opacity: 1,
				},
				'80%': {
					opacity: 0,
				},
				'100%': {
					transform: 'translateX(-130%)',
				},
			},
			'slide-out-reverse': {
				'0%': {
					transform: 'translateX(0)',
					opacity: 1,
				},
				'80%': {
					opacity: 0,
				},
				'100%': {
					transform: 'translateX(130%)',
				},
			},
			'fade-in': {
				'0%': {
					opacity: 0,
				},
				'100%': {
					opacity: 1,
				},
			},
			'fade-out': {
				'0%': {
					opacity: 1,
				},
				'100%': {
					opacity: 0,
				},
			},
		},
	},
};
