'use client';

import throwError from '@helpers/throwError';
import { searchResultsState, trimmedQuerySelector } from "@state/homepageState";
import Suggestion from '@t/suggestion';
import { useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const AUTOCOMPLETE_URL =
	process.env.NEXT_PUBLIC_AUTOCOMPLETE_URL ?? throwError('NEXT_PUBLIC_AUTOCOMPLETE_URL env variable is not defined');

export default function SearchUpdater() {
	const query = useRecoilValue(trimmedQuerySelector);
	const setSearchResults = useSetRecoilState(searchResultsState);

	const fetchResults = useCallback(async (query: string) => {
		if (query.length < 3) {
			return [];
		}

		const response = await fetch(`${AUTOCOMPLETE_URL}${query}`);
		const data = (await response.json()) as Suggestion[];
		return data.map(({ result }) => result);
	}, []);


	useEffect(() => {
		async function updateSearchResults() {
			const results = await fetchResults(query);
			setSearchResults(results);
		}
		updateSearchResults();
	}, [query, fetchResults, setSearchResults]);

	return null;
}
