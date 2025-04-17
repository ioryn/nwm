/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'jumbo-bg': "url('../assets/nwmain2.png')",
			},
			colors: {
			  // primary: defaultTheme.colors.green
				'nwm-blue': '#25B5FE',
				'nwm-lblue': '#DDF2FC',
				'nwm-pdfblue': '#1481ab',
				'nwm-green': '#4AC3BA',
			},
		  }
	},
	plugins: [],
}
