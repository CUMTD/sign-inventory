'use client';

import { Card, CardContent } from '@mui/material';
import { searchResultsState } from '@state/homepageState';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import styles from './listSuggestions.module.css';

export default function ListSuggestions() {
	const searchResults = useRecoilValue(searchResultsState);

	return (
		<div className={styles.suggestionList}>
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
