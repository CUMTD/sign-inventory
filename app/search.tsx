'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ListSuggestions from './listSuggestions';
import styles from './search.module.css';
import SearchBox from './searchBox';
import SearchUpdater from './searchUpdater';
import SignImage from './signImage';

export default function Search() {
	return (
		<>
			<SearchUpdater />
			<Container>
				<Box>
					<div className={styles.primarySearchInterface}>
						<SignImage />
						<SearchBox />
					</div>
				</Box>
				<Box>
					<ListSuggestions />
				</Box>
			</Container>
		</>
	);
}
