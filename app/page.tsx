'use client';

import RecoilProvider from '@components/recoilProvider';
import Search from './search';
import AuthBox from './authBox';

export default function Home() {
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
