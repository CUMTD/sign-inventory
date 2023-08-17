import { ChildStop } from '@t/apiResponse';

const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

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

export async function putParentStop(child_stop: ChildStop) {
	// TODO: wire up to param after testing

	const body = JSON.stringify(child_stop);
	console.log('body', body);

	const response = await fetch(`${ENDPOINT}/child-stops/TEST/1`, {
		method: 'PUT',
		headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
		mode: 'cors',
		body: JSON.stringify(child_stop),
	});
	// if (!response.ok) {
	// 	return response.status;
	// 	throw new Error(`HTTP error! status: ${response.status}`);
	// }
	return response.ok;
}

export async function fetchStopPhoto(stopId: string) {
	const response = await fetch(`${ENDPOINT}/child-stop/${stopId}`, {
		method: 'GET',
		headers: { 'Access-Control-Allow-Origin': '*' },
		mode: 'cors',
	});
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const photo = (await response.url) as string;
	console.log('photo: ', photo);
	return photo;
}
