/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	corePlugins: {
		preflight: false, // Desactiva los estilos base de Tailwind
	},
	plugins: [],
}
