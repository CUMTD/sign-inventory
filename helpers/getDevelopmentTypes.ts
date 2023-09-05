import { DevelopmentType } from '@t/apiResponse';

import throwError from './throwError';
import { join } from 'path';
const fs = require('fs').promises;

async function writeJsonOutput(fileName: string, data: DevelopmentType[]) {
	try {
		const path = join(__dirname, 'data', fileName);
		await fs.writeFile(path, JSON.stringify(data));
	} catch (err) {
		console.log(err);
	}
}

const ENDPOINT = process.env.INVENTORY_API_ENDPOINT ?? throwError('Missing INVENTORY_API_ENDPOINT in env vars');
const KEY = process.env.INVENTORY_API_KEY ?? throwError('Missing INVENTORY_API_KEY in env vars');

async function getDevelopmentTypes() {
	const response = await fetch(`${ENDPOINT}/development-type`, {
		method: 'GET',
		cache: 'force-cache',
		headers: {
			'X-ApiKey': KEY,
			'Accepts': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const developmentTypes = (await response.json()) as DevelopmentType[];
	return developmentTypes;
}

async function main() {
	const developmentTypes = await getDevelopmentTypes();
	await writeJsonOutput('development_types.json', developmentTypes);
}

main();
