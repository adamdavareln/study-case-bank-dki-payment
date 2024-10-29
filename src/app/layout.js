import { Provider } from "react-redux";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { store } from "@/store";
import StoreProvider from "@/store/StoreProvider";

// If loading a variable font, you don't need to specify the font weight
const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={`${plusJakartaSans.className} antialiased`}>
					{children}
				</body>
			</html>
		</StoreProvider>
	);
}
