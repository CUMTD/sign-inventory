import Suggestion from '@/types/suggestion';
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
		<ul className={styles.suggestionList}>
			{resultsToDisplay.map(({ id, name, city }) => (
				<li key={id} className={styles.suggestion}>
					<Link key={id} className={styles.Link} href={`/${id}`}>
						<div className={styles.suggestionlower}>{city}</div>
						{name}
					</Link>
				</li>
			))}
		</ul>
	);
}
