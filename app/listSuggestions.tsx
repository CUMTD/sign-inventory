'use client';

import { searchResultsState } from '@state/homepageState';
import { useRecoilValue } from 'recoil';
import ListSuggestion from './listSuggestion';
import styles from './listSuggestions.module.css';

export default function ListSuggestions() {
	const searchResults = useRecoilValue(searchResultsState);

	return (
		<div className={styles.suggestionList} role="list">
			{searchResults.map(result => (
				<ListSuggestion key={result.id} result={result} />
			))}
		</div>
	);
}
