'use client';

import { Card, CardContent } from '@mui/material';
import { searchResultsState } from '@state/homepageState';
import Link from 'next/link';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './listsuggestions.module.css';
import { selectedStopFriendlyNameState } from '@state/serverDataState';

export default function ListSuggestions() {
	// broken (should set the parent stop name on the sidebar, not optimal way)
	const searchResults = useRecoilValue(searchResultsState);
	const [name, setNewName] = useRecoilState(selectedStopFriendlyNameState);
	function setName(new_name: string) {
		setNewName(new_name);
	}

	// format the search suggestions nicely
	return (
		<div style={{ marginTop: '3em' }} className={styles.suggestionList}>
			{searchResults.map(({ id, name, city }) => (
				<Card key={id}>
					<CardContent>
						<Link
							key={id}
							className={styles.Link}
							href={`/${id}`}
							onClick={() => setName(name)}
							style={{ display: 'flex', flexDirection: 'row' }}
						>
							{name} <span className={styles.suggestionlower}>{city}</span>
						</Link>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
