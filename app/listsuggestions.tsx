import Suggestion from '@/types/suggestion';
import { Card, CardContent } from '@mui/material';
import Link from 'next/link';
import styles from './listsuggestions.module.css';

interface Props {
	results: Suggestion[];
}

export default function ListSuggestions({ results }: Props) {
	// drill down to the results array
	const resultsToDisplay = results.map(({ result }) => result);

	// format the search suggestions nicely
	return (
		<div style={{ marginTop: '2em' }}>
			{resultsToDisplay.map(({ id, name, city }) => (
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
