import QueryClientConfig from "@/components/QueryClientConfig";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Chronicler Interview",
	description: "Chronicler Interview",
	authors: [{ name: "Chronicler" }],
	themeColor: "#ffffff",
	viewport:
		"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
	icons: {
		apple: [
			{
				url: "https://media.contra.com/image/upload/c_fill,f_avif,h_64,q_auto:good,w_64/shjzpq4ljsfxgw3wil5l",
				type: "image/png",
				sizes: "180x180",
				rel: "apple-touch-icon",
			},
		],
		icon: [
			{
				url: "https://media.contra.com/image/upload/c_fill,f_avif,h_64,q_auto:good,w_64/shjzpq4ljsfxgw3wil5l",
				type: "image/png",
				sizes: "32x32",
				rel: "icon",
			},
			{
				url: "https://media.contra.com/image/upload/c_fill,f_avif,h_64,q_auto:good,w_64/shjzpq4ljsfxgw3wil5l",
				type: "image/png",
				sizes: "16x16",
				rel: "icon",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<QueryClientConfig>
			<html lang="en">
				<body className="antialiased">{children}</body>
			</html>
		</QueryClientConfig>
	);
}
