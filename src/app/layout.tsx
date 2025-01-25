import QueryClientConfig from "@/components/QueryClientConfig";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<QueryClientConfig>
			<html lang="en">
				<head>
					<title>Chronicler Interview</title>
				</head>
				<body className="antialiased">{children}</body>
			</html>
		</QueryClientConfig>
	);
}
