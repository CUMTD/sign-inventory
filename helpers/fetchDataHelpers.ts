import throwError from './throwError';
import { ChildStop, DevelopmentType } from '@t/apiResponse';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? throwError('Missing NEXT_PUBLIC_BASE_URL in env vars');

const defaultFetchConfig: RequestInit = {};

// fetches all siblings of child stop
export async function getSiblings(stopId: string) {
	const response = await fetch(`${BASE_URL}/api/stop-point/${stopId}/siblings`, {
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
	const response = await fetch(`${BASE_URL}/api/stop-point/TEST-1`, {
		method: 'PUT',
		body: JSON.stringify({ ...child_stop, content: null }),
	});

	return response;
}

export async function getStopPhoto(stopId: string) {
	const response = await fetch(`${BASE_URL}/api/stop-point/${stopId}/image`, {
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
	const response = await fetch(`${BASE_URL}/api/stop-point/${stopId}/image`, {
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

export async function getDevelopmentTypes() {
	const response = await fetch(`${BASE_URL}/api/development-types`, {
		...defaultFetchConfig,
		method: 'GET',
		cache: 'force-cache',
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const developmentTypes = await response.json();
	return developmentTypes as DevelopmentType[];
}
