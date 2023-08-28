import throwError from "@helpers/throwError";
import { NextRequest, NextResponse } from "next/server";
import 'server-only';

const ENDPOINT = process.env.INVENTORY_API_ENDPOINT ?? throwError('Missing INVENTORY_API_ENDPOINT in env vars');
const KEY = process.env.INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

interface Params {
	params: {
		id: string;
	}
}

export async function GET(_: NextRequest, { params: { id } }: Params) {
	const uri = `${ENDPOINT}/stop-point/${id}`;

	const response = await fetch(uri, {
		method: 'GET',
		headers: {
			'X-ApiKey': KEY,
			'Accepts': 'application/json'
		}
	});


	if (!response.ok) {
		return new Response('Error with API call', {
			status: response.status
		});
	}

	const json = await response.json();

	return NextResponse.json(json);
}

function readBody(body: ReadableStream<Uint8Array> | null): Promise<string> {
	return new Promise((resolve, reject) => {
		if (body === null) {
			reject('Body was null');
			return;
		}

		const reader = body.getReader();
		reader
			.read()
			.then((val) => {
				const data = val.value?.toString();
				if (data) {
					resolve(data);
				} else {
					reject('No data');
				}
			}, (err) => {
				reject(err);
			});
	});
}

export async function PUT(req: NextRequest, { params: { id } }: Params) {
	const { body } = req;
	const uri = `${ENDPOINT}/stop-point/${id}`;
	const bodyString = await readBody(body);

	const response = await fetch(uri, {
		method: 'PUT',
		headers: {
			'X-ApiKey': KEY,
			'Content-Type': 'application/json'
		},
		body: bodyString
	});

	if (!response.ok) {
		return new Response('Error with API call', {
			status: response.status
		});
	}

	const json = await response.json();
	return NextResponse.json(json);
}
