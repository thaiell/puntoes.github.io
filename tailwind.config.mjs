/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
			extend: {
				colors: {
					primary: "#01a197",
					secondary: "#F0F0F0",
					lighterPrimary: "#D6FFFC",
					link: "#0645AD",
					niceGray: "rgb(238, 238, 238)"
				},
				fontFamily: {
					Comfortaa: "Comfortaa"
				}
			},
	},
	plugins: [],
}
