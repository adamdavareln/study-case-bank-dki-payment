/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				redPrimary: "#E21A1A",
				grayText: "#75788D",
				grayText2: "#999999",
				darkBlue: "#344054",
				lightGray: "#F7F7F7",
				lightGray2: "#F2F6FA",
				placeholder: "#98A2B3",
				border: "#EAECF0",
				lightBorder: "#F6F5F5",
				border3: "#E1E2EF",
				inputBorder: "#D0D5DD",
				disabled: "#EBECEE",
				disabledText: "#BDBDBD",
			},
			fontSize: {
				lg: ["18px", "27px"],
				sm: ["14px", "21px"],
				xs: ["12px", "18px"],
			},
			boxShadow: {
				sm: "0px -16px 32px 0px rgba(78, 78, 78, 0.04)",
			},
		},
	},
	plugins: [],
};
