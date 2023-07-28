'use client';

import { Card, CardContent } from '@mui/material';
import { searchResultsState } from '@state/homepageState';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import styles from './listsuggestions.module.css';

export default function ListSuggestions() {
	const searchResults = useRecoilValue(searchResultsState);

	// format the search suggestions nicely
	return (
		<div style={{ marginTop: '3em' }}>
			{searchResults.map(({ id, name, city }) => (
				<Card key={id} elevation={2}>
					<CardContent>
						<Link key={id} className={styles.Link} href={`/${id}`}>
							{name}
							<div className={styles.suggestionlower}>{city}</div>
						</Link>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
