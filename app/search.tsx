'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ListSuggestions from './listsuggestions';
import styles from './search.module.css';
import SearchBox from './searchBox';
import SignImage from './signImage';

export default function Search() {
	return (
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
	);
}
