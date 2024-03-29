/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				myTheme: {
					primary: "rgb(255,255,255)",
					secondary: "rgb(75,75,75)",
					info: "rgb(100,100,100)",
					accent: "rgb(0,255,255)",
				},
			}
		]
	}
};
