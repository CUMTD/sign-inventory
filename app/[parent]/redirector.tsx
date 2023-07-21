'use client';

import { serverDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

interface Props {
	parent: string;
}

export default function Page({ parent }: Props) {
	const router = useRouter();
	const [serverData, setServerData] = useRecoilState(serverDataState);
	let stops: ChildStop[] = [];
	// const response = await fetch('https://localhost:7135/stop-point/GRNORCH');
	// stops = (await response.json()) as ChildStop[];

	setServerData(stops);

	const redirectUrl = `/${parent}/${1}/`;
	console.log('server data', { serverData, redirectUrl });

	// return stops.map((stop) => stop);


	// TODO dynamically load the first child stop and redirect

	// useEffect(() => {
	// 	if (router) {
	router.push(redirectUrl);
	// 	}
	// }, [parent, router]);
	// return null;

	return null;
}
