'use client';

import RecoilProvider from '@components/recoilProvider';
import Search from './search';
import AuthHandler from './authHandler';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
	return (
		<SessionProvider>
			<RecoilProvider>
				<AuthHandler />
				<Search />
			</RecoilProvider>
		</SessionProvider>
	);
}
