import { ChildStop } from '@t/apiResponse';

const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

export async function fetchChildStops(stopId: string) {
	const response = await fetch(`${ENDPOINT}/child-stops/${stopId}`, {
		method: 'GET',
		headers: { 'Access-Control-Allow-Origin': '*' },
		mode: 'cors',
		next: {
			tags: ['child-stops'],
		},
		cache: 'no-cache',
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

	return response.ok;
}

export async function fetchStopPhoto(stopId: string) {
	const response = await fetch(`${ENDPOINT}/child-stop/${stopId}`, {
		method: 'GET',
		headers: { 'Access-Control-Allow-Origin': '*' },
		mode: 'cors',
	});

	if (response.status === 404) {
		// no image exists
		return null;
	}

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const blob = await response.blob();

	return new Promise<string | null>((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.onload = function () {
			const result = this.result as string;
			resolve(result);
		};
		fileReader.onerror = function () {
			reject('Failed to decode image.');
		};
		fileReader.readAsDataURL(blob);
	});
}
