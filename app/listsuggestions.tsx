import { Card, CardContent } from '@mui/material';
import { searchResultsSelector } from '@state/homepageState';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import styles from './listsuggestions.module.css';

export default function ListSuggestions() {
	const searchResults = useRecoilValue(searchResultsSelector);

	// format the search suggestions nicely
	return (
		<div style={{ marginTop: '2em' }}>
			{searchResults.map(({ id, name, city }) => (
				<Card key={id} elevation={2}>
					<CardContent>
						<Link key={id} className={styles.Link} href={`/${id}`}>
							<div className={styles.suggestionlower}>{city}</div>
							{name}
						</Link>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
