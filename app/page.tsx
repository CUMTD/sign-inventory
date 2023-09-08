'use client';

import RecoilProvider from '@components/recoilProvider';
import Search from './search';
import TopBar from './[stopId]/topBar';

export default function Home() {
	return (
		<>
			<TopBar />
			<RecoilProvider>
				<Search />
			</RecoilProvider>
		</>
	);
}
