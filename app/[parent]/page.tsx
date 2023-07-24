'use client';

import RecoilProvider from '@components/recoilProvider';
import Redirector from './redirector';
import fetchNewData from '@helpers/fetchNewData';

interface Props {
	params: {
		parent: string;
	};
}

export default function Page({ params: { parent } }: Props) {
	return (
		<RecoilProvider>
			<Redirector parent={parent} />
		</RecoilProvider>
	);
}
