'use client';

import theme from '@components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css';
import { RecoilRoot } from 'recoil';

export const metadata = {
	title: 'Sign Inventory',
	description: 'Internal MTD tool for managing sign inventory',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<CssBaseline />
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<body>{children}</body>
				</ThemeProvider>
			</RecoilRoot>
		</html>
	);
}
