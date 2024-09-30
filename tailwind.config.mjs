/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'grid-pattern': `
				  linear-gradient(to right, #e5e7eb 1px, transparent 1px),
				  linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
				`,
			  },
			  backgroundSize: {
				'grid-pattern': '10px 10px',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),],
}
