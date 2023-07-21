'use client';

import RecoilProvider from '@components/recoilProvider';
import Search from './search';

export default function Home() {
	return (
		<main>
			<RecoilProvider>
				<Search />
			</RecoilProvider>
		</main>
	);
}
