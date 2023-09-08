import throwError from '@helpers/throwError';
import { NextRequest, NextResponse } from 'next/server';
import 'server-only';

const ENDPOINT = process.env.INVENTORY_API_ENDPOINT ?? throwError('Missing INVENTORY_API_ENDPOINT in env vars');
const KEY = process.env.INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

interface Params {
	params: {
		id: string;
	};
}

export async function GET(_: NextRequest, { params: { id } }: Params) {
	const uri = `${ENDPOINT}/stop-point/${id}/image`;

	const response = await fetch(uri, {
		method: 'GET',
		headers: {
			'X-ApiKey': KEY,
			'Accepts': 'image/jpeg',
		},
	});

	if (!response.ok) {
		return new Response('Error with API call', {
			status: response.status,
		});
	}
}

export async function PUT(req: Request, { params: { id } }: Params) {
	const uri = `${ENDPOINT}/stop-point/${id}/image`;
	const body = await req.json();

	const requestInit: RequestInit = {
		method: 'PUT',
		headers: {
			'X-ApiKey': KEY,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	};
	const response = await fetch(uri, requestInit);

	if (!response.ok) {
		return new Response('Error with API call', {
			status: response.status,
		});
	}

	return response;
}
