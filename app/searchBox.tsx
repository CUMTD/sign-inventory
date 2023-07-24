'use client';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { queryState } from '@state/homepageState';
import { ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import styles from './search.module.css';

export default function SearchBox() {
	const setQuery = useSetRecoilState(queryState);

	function inputChange(event: ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value);
	}

	return (<div className={styles.titleAndSearchBar}>
		<Typography variant="h3" component="h1" gutterBottom>
			Sign Inventory
		</Typography>
		<TextField
			id="standard-basic"
			variant="standard"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				),
			}}
			type="text"
			placeholder="Ex. Green and Orchard"
			required
			autoFocus
			onChange={inputChange}
		/>
	</div>
	)
}
