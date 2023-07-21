import throwError from '@/helpers/throwError';
import Suggestion, { Result } from '@/types/suggestion';
import { atom, selector } from 'recoil';

const AUTOCOMPLETE_URL =
	process.env.NEXT_PUBLIC_AUTOCOMPLETE_URL ?? throwError('NEXT_PUBLIC_AUTOCOMPLETE_URL env variable is not defined');

export const queryState = atom<string>({
	key: 'queryState',
	default: '',
});

export const trimmedQuerySelector = selector<string>({
	key: 'trimmedQuerySelector',
	get: ({ get }) => {
		const query = get(queryState);
		return query.trim();
	},
});

export const searchResultsSelector = selector<Result[]>({
	key: 'searchResultsSelector',
	get: async ({ get }) => {
		console.log('searchResultsSelector');
		const trimmedQuery = get(trimmedQuerySelector);
		if (trimmedQuery.length < 3) {
			return [];
		}

		const response = await fetch(`${AUTOCOMPLETE_URL}${trimmedQuery}`);
		const data = (await response.json()) as Suggestion[];
		return data.map(({ result }) => result);
	},
});
