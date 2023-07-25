'use client';

import { childStopsState, currentStopIdState, selectedChildStopState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ReactNode } from "react";
import { RecoilRoot, SetRecoilState } from "recoil";
import SideMenu from "./sideMenu";
interface Props {
	params: {
		stopId: string;
	},
	children: ReactNode;
}

const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

async function fetchChildStops(stopId: string) {
	const response = await fetch(`${ENDPOINT}/child-stops/${stopId}`, {
		method: 'GET',
		headers: { 'Access-Control-Allow-Origin': '*' },
		mode: 'cors',
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const stops = (await response.json()) as ChildStop[];
	return stops;
}

export default async function Layout({ params: { stopId }, children }: Props) {
	const childStops = await fetchChildStops(stopId);

	function initializeState({ set }: { set: SetRecoilState }) {
		set(currentStopIdState, stopId);
		set(childStopsState, childStops);
		set(selectedChildStopState, parseInt(childStops[0].id.split(':')[1]));
	}

	return <RecoilRoot initializeState={initializeState}>
		<SideMenu>
			{children}
		</SideMenu>
	</RecoilRoot>
}
