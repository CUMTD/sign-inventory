'use client';

import { Card, CardContent } from '@mui/material';
import { searchResultsState } from '@state/homepageState';
import Link from 'next/link';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './listsuggestions.module.css';
import { selectedStopFriendlyNameState } from '@state/serverDataState';

export default function ListSuggestions() {
	const searchResults = useRecoilValue(searchResultsState);

	// format the search suggestions nicely
	return (
		<div style={{ marginTop: '3em' }} className={styles.suggestionList}>
			{searchResults.map(({ id, name, city }) => (
				<Card key={id}>
					<CardContent>
						<Link key={id} className={styles.Link} href={`/${id}`} style={{ display: 'flex', flexDirection: 'row' }}>
							{name} <span className={styles.suggestionlower}>{city}</span>
						</Link>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
