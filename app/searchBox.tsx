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

	//TODO: Cleanup rendering style with label
	return (
		<div className={styles.titleAndSearchBar}>
			<Typography variant="h3" component="h1">
				Sign Inventory
			</Typography>
			<TextField
				label="Stop Name"
				id="standard-basic"
				variant="outlined"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				type="search"
				placeholder="Ex. Green and Orchard"
				required
				autoFocus
				onChange={inputChange}
			/>
		</div>
	);
}
