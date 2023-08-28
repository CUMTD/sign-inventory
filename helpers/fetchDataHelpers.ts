import { ChildStop } from '@t/apiResponse';
import 'server-only';
import throwError from './throwError';

const ENDPOINT =
	process.env.INVENTORY_API_ENDPOINT ??
	throwError('Missing INVENTORY_API_ENDPOINT in env vars');

const API_KEY = process.env.INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

const defaultFetchConfig: RequestInit = {
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	mode: 'cors',
};

// fetches all siblings of child stop
export async function getSiblings(stopId: string) {
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

// writes child stop to db
// TODO: wire up to child_stop param when ready to deploy

export async function putParentStop(child_stop: ChildStop) {
	const response = await fetch(`${ENDPOINT}/stop-point/TEST-1`, {
		method: 'PUT',
		headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'X-ApiKey': API_KEY },
		mode: 'cors',
		body: JSON.stringify({ ...child_stop, content: null }),
	});

	return response.ok;
}

export async function getStopPhoto(stopId: string) {
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
