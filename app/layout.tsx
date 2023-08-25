'use client';

import custom_theme from '@components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';

export const metadata = {
	title: 'Sign Inventory',
	description: 'Internal MTD tool for managing sign inventory',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<ThemeProvider theme={custom_theme}>
				<CssBaseline />
				<body>
					<main>{children}</main>
				</body>
			</ThemeProvider>
		</html>
	);
}
