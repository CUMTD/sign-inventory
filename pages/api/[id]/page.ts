import throwError from '@helpers/throwError';
import { NextApiRequest, NextApiResponse } from 'next';
import 'server only';

const ENDPOINT =
	process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT ??
	throwError('Missing NEXT_PUBLIC_INVENTORY_API_ENDPOINT in env vars');
const API_KEY = process.env.INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

const defaultFetchConfig: RequestInit = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'X-ApiKey': API_KEY,
	},
	mode: 'cors',
};

export default async function handler({ method, body, query: { id } }: NextApiRequest, res: NextApiResponse) {
	if (method !== 'PUT') {
		res.status(405).end();
		return;
	}

	const url = `${ENDPOINT}/stop-point/${id}`;

	const response = await fetch(url, {
		...defaultFetchConfig,
		method: 'PUT',
		body,
	});

	if (!response.ok) {
		res.status(500).end();
		return;
	}

	res.status(200).end();
}
