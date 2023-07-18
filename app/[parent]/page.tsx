'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
	params: {
		parent: string;
	};
}

export default function Page({ params: { parent } }: Props) {
	const router = useRouter();

	// TODO dynamically load the first child stop and redirect

	useEffect(() => {
		if (router) {
			router.push(`/${parent}/${1}/`);
		}
	}, [parent, router]);
	return null;
}
