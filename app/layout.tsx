'use client';

import custom_theme from '@components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css';
import React from 'react';
import { createTheme, useMediaQuery } from '@mui/material';

export const metadata = {
	title: 'Sign Inventory',
	description: 'Internal MTD tool for managing sign inventory',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = React.useMemo(
		() =>
			createTheme({
				...custom_theme,
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
					primary: prefersDarkMode ? { main: '#90caf9' } : { main: '#002f87' },
					secondary: prefersDarkMode ? { main: '#f48fb1' } : { main: '#E91D2D' },
				},
			}),
		[prefersDarkMode],
	);

	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<body>{children}</body>
			</ThemeProvider>
		</html>
	);
}
