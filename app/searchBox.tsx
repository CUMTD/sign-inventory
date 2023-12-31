'use client';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { queryState, searchResultsState } from '@state/homepageState';
import { ChangeEvent, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import styles from './searchBox.module.css';

export default function SearchBox() {
	const setQuery = useSetRecoilState(queryState);

	function inputChange(event: ChangeEvent<HTMLInputElement>) {
		setQuery(event.target.value);
	}
	const textFieldRef = useRef<HTMLDivElement>(null);

	return (
		<>
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
					onChange={inputChange}
					ref={textFieldRef}
					onInput={() =>
						typeof window !== 'undefined' && window.scrollTo(0, (textFieldRef.current?.offsetTop || 0) - 50)
					}
					onBlur={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}
				/>
			</div>
		</>
	);
}
