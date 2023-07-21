'use client';

import RecoilProvider from '@components/recoilProvider';
import Redirector from './redirector';

interface Props {
	params: {
		parent: string;
	};
}

export default function Page({ params: { parent } }: Props) {
	return <RecoilProvider>
		<Redirector parent={parent} />
	</RecoilProvider>
}
