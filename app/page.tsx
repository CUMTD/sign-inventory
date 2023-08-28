'use client';

import RecoilProvider from '@components/recoilProvider';
import Search from './search';
import { useSession } from 'next-auth/react';
import AuthBox from './authBox';

export default function Home() {
	// const { data: session } = useSession({ required: true });
	// if (session && session.user) {
	return (
		<>
			<div
				style={{
					position: 'absolute',
					bottom: '0',
					left: '0',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'left',
					alignItems: 'right',
					gap: '1rem',
					padding: '3rem 4rem',
					// marginTop: 'auto',
					// marginBottom: '-1em',
				}}
			>
				<AuthBox />
			</div>

			<RecoilProvider>
				<Search />
			</RecoilProvider>
		</>
	);
	// }
}
