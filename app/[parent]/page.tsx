'use client';

import { serverDataState } from '@/state/serverDataState';
import { ChildStop } from '@/types/apiResponse';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
	params: {
		parent: string;
	};
}

export default function Page({ params: { parent } }: Props) {
	const [serverData, setServerData] = useRecoilState(serverDataState);
	let stops: ChildStop[] = [];
	// const response = await fetch('https://localhost:7135/stop-point/GRNORCH');
	// stops = (await response.json()) as ChildStop[];

	setServerData(stops);

	console.log(serverData);

	// return stops.map((stop) => stop);

	const router = useRouter();

	// TODO dynamically load the first child stop and redirect

	// useEffect(() => {
	// 	if (router) {
	router.push(`/${parent}/${1}/`);
	// 	}
	// }, [parent, router]);
	// return null;
}
