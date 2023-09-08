'use client';

import ListSuggestions from './listSuggestions';
import styles from './search.module.css';
import SearchBox from './searchBox';
import SearchUpdater from './searchUpdater';

export default function Search() {
	return (
		<>
			<SearchUpdater />
			<div className={styles.primaryContainer}>
				<div className={styles.primarySearchInterface}>
					<SearchBox />
				</div>
				<ListSuggestions />
			</div>
		</>
	);
}
