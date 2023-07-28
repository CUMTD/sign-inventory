'use client';

import RecoilProvider from '@components/recoilProvider';
import Search from './search';
import { useRecoilSnapshot } from 'recoil';
import { ReactNode, useEffect } from 'react';

export default function Home() {
	return (
		<main>
			<RecoilProvider>
				<Search />
			</RecoilProvider>
		</main>
	);
}
