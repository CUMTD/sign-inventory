import { ChildStop } from '@t/apiResponse';
import { atom, selector, useRecoilSnapshot } from 'recoil';
import Tab from './tabTypes';

const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

export const selectedTabState = atom<number>({
	key: 'selectedTabState',
	default: 0,
});

//just the string in front
export const selectedParentStopState = atom<string>({
	key: 'selectedParentStopState',
	default: '',
});

// this is a number
export const selectedChildStopState = atom<number>({
	key: 'selectedChildStopState',
	default: -1,
});

// return STRING:NUM
export const selectedStopIdSelector = selector<string>({
	key: 'selectedStopIdSelector',
	get: ({ get }) => {
		const selectedParentStop = get(selectedParentStopState);
		const selectedChildStop = get(selectedChildStopState);

		return `${selectedParentStop}:${selectedChildStop}`;
	},
});

// all the possible child stops
export const childStopsState = atom<ChildStop[]>({
	key: 'childStopsState',
	default: [],
});

export async function fetchChildStops(stopId: string) {
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
