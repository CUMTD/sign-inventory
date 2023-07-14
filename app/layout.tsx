'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import './globals.css';
import theme from './theme';

export const metadata = {
	title: 'Sign Inventory',
	description: 'Internal MTD tool for managing sign inventory',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<RecoilRoot>
				<CssBaseline />
				<ThemeProvider theme={theme}>
					<body>{children}</body>
				</ThemeProvider>
			</RecoilRoot>
		</html >
	);
}
