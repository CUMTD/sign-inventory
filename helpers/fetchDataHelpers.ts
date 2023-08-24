import { ChildStop } from '@t/apiResponse';
import throwError from './throwError';

const ENDPOINT =
	process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT ??
	throwError('Missing NEXT_PUBLIC_INVENTORY_API_ENDPOINT in env vars');

const API_KEY = process.env.NEXT_PUBLIC_INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

const defaultFetchConfig: RequestInit = {
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	mode: 'cors',
};

export async function fetchChildStops(stopId: string) {
	const response = await fetch(`${ENDPOINT}/stop-point/${stopId}/siblings`, {
		...defaultFetchConfig,
		method: 'GET',
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
	let utf8Encode = new TextEncoder();

	// const contentAsBytes = utf8Encode.encode(child_stop.content.split('data:image/jpeg;base64,')[1] ?? '');
	const contentAsBytes = child_stop.content.split('data:image/jpeg;base64,')[1] ?? '';

	const response = await fetch(`${ENDPOINT}/stop-point/TEST-1`, {
		method: 'PUT',
		headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'X-ApiKey': API_KEY },
		mode: 'cors',
		body: JSON.stringify({ ...child_stop, content: null }),
	});

	return response.ok;
}

// export async function putParentStop(child_stop: ChildStop) {

// 	// TODO: wire up to param after testing
// 	const { id } = child_stop;
// 	const body = JSON.stringify(child_stop);
// 	console.log(child_stop);

// 	const response = await fetch(`/api/TEST-1`, {
// 		// const response = await fetch(`/api/${id}`, {
// 		...defaultFetchConfig,
// 		method: 'PUT',
// 		body,
// 	});

// 	return response.ok;
// }

export async function fetchStopPhoto(stopId: string) {
	const response = await fetch(`${ENDPOINT}/stop-point/${stopId}/image`, {
		...defaultFetchConfig,
		method: 'GET',
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

export async function putStopPhoto(stopId: string, image: string | null) {
	console.log(image?.split('data:image/jpeg;base64,')[1]);
	const response = await fetch(`${ENDPOINT}/stop-point/${stopId}/image`, {
		...defaultFetchConfig,
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: '"' + image?.split('data:image/jpeg;base64,')[1] + '"',
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
}
