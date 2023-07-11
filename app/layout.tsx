'use client';

import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

export const metadata = {
	title: 'Sign Inventory',
	description: 'Internal MTD tool for managing sign inventory',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<body>{children}</body>
			</ThemeProvider>
		</html>
	);
}
