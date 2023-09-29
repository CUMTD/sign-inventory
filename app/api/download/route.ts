import throwError from '@helpers/throwError';
import { NextRequest } from 'next/server';

const ENDPOINT = process.env.INVENTORY_API_ENDPOINT ?? throwError('Missing INVENTORY_API_ENDPOINT in env vars');
const KEY = process.env.INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

export async function GET(_: NextRequest) {
	const uri = `${ENDPOINT}/download`;
	return uri;
}
