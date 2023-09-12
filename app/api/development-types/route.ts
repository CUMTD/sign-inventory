import throwError from '@helpers/throwError';
import { NextRequest } from 'next/server';

const ENDPOINT = process.env.INVENTORY_API_ENDPOINT ?? throwError('Missing INVENTORY_API_ENDPOINT in env vars');
const KEY = process.env.INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

export async function GET(_: NextRequest) {
	const uri = `${ENDPOINT}/development-types`;
	const response = await fetch(uri, {
		method: 'GET',
		headers: {
			'X-ApiKey': KEY,
			'Accepts': 'application/json',
		},
		// cache: 'force-cache',
	});
	if (!response.ok) {
		return new Response('Error with API call', {
			status: response.status,
		});
	}
	return response;
}
