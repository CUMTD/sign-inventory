import { ChildStop } from '@t/apiResponse';

const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

export default async function fetchNewData(stopId: string) {
	let stops: ChildStop[] = [];
	const response = await fetch(`${ENDPOINT}/stop-point/${stopId}`, {
		method: 'GET',
		headers: { 'Access-Control-Allow-Origin': '*' },
		mode: 'cors',
	});
	stops = (await response.json()) as ChildStop[];
	// console.log('done:', stops);
	return stops.map((stop) => stop);
}
