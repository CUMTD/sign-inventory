import { ChildStop } from '@t/apiResponse';
import { atom, selector, useRecoilValue } from 'recoil';
const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

export const currentStop = atom<string>({
	key: 'currentStop',
	default: '',
});

export const serverNeighbors = selector<ChildStop[]>({
	key: 'serverNeighbors',
	get: async ({ get }) => {
		let stops: ChildStop[] = [];
		const response = await fetch(`${ENDPOINT}/neighbors/${get(currentStop).replace('-', ':')}`, {
			method: 'GET',
			headers: { 'Access-Control-Allow-Origin': '*' },
			mode: 'cors',
		});
		stops = (await response.json()) as ChildStop[];

		return stops.map((stop) => stop);
	},
});
