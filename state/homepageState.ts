import throwError from '@helpers/throwError';
import { Result } from '@t/suggestion';
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

export const searchResultsState = atom<Result[]>({
	key: 'searchResultsState',
	default: []
});
