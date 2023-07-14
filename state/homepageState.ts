import Suggestion, { Result } from '@/types/suggestion';
import { atom, selector } from "recoil";

export const queryState = atom<string>({
	key: 'queryState',
	default: ''
});

export const trimmedQuerySelector = selector<string>({
	key: 'trimmedQuerySelector',
	get: ({ get }) => {
		const query = get(queryState);
		return query.trim();
	}
});

export const searchResultsState = atom<Suggestion[]>({
	key: 'searchResultsState',
	default: []
});

export const searchResultCountSelector = selector<number>({
	key: 'searchResultCountSelector',
	get: ({ get }) => {
		const results = get(searchResultsState);
		return results.length;
	}
});

export const resultsToDisplaySelector = selector<Result[]>({
	key: 'resultsToDisplaySelector',
	get: ({ get }) => {
		const results = get(searchResultsState);
		return results.map(({ result }) => result);
	}
});
