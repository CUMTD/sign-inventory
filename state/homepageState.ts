import { Result } from '@t/suggestion';
import { atom, selector } from 'recoil';

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
	default: [],
});
