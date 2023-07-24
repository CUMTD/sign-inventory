'use client';

import fetchNewData from '@helpers/fetchNewData';
import { serverDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
	parent: string;
}

export default async function Page({ parent }: Props) {
	const router = useRouter();

	const [serverData, setServerData] = useRecoilState(serverDataState);

	const response = await fetchNewData(parent);
	setServerData(response);

	console.log('new server data: ', serverData);

	const redirectUrl = `/${parent}/${serverData[0].id.split(':')[1]}/`;

	// TODO dynamically load the first child stop and redirect

	useEffect(() => {
		if (router) {
			router.push(redirectUrl);
		}
	}, [parent, router]);
	return null;
}
