'use client';

import custom_theme from '@components/theme';
import { createTheme, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';

export const metadata = {
	title: 'Sign Inventory',
	description: 'Internal MTD tool for managing sign inventory',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	// dark mode configuration
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


	// TODO: Move to custom theme file
	const theme = useMemo(
		() =>
			createTheme({
				...custom_theme,
				palette: {
					mode: 'dark',
					primary: { main: '#90caf9' },
					secondary: { main: '#f48fb1' },
				},
			}),
		[],
	);

	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<body>
					<main>
						{children}
					</main>
				</body>
			</ThemeProvider>
		</html>
	);
}
