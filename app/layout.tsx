'use client';

import custom_theme from '@components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import './globals.css';

// export const metadata = {
// 	title: 'Sign Inventory',
// 	description: 'Internal MTD tool for managing sign inventory',
// };

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<SessionProvider>
				<link rel="manifest" href="/manifest.json"></link>
				<ThemeProvider theme={custom_theme}>
					<CssBaseline />
					<body>
						<main>{children}</main>
					</body>
				</ThemeProvider>
			</SessionProvider>
		</html>
	);
}
