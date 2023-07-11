'use client';
import Suggestion from '@/types/suggestion';
import ListSuggestions from './listsuggestions';

import { ChangeEvent, useEffect, useState } from 'react';
import styles from './page.module.css';

import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';

import { Box, Container, InputAdornment, TextField, Typography } from '@mui/material';

// grab the search suggestions api endpoint from the environment variables
const AUTOCOMPLETE_URL = process.env.NEXT_PUBLIC_AUTOCOMPLETE_URL;
if (!AUTOCOMPLETE_URL) {
	throw new Error('NEXT_PUBLIC_AUTOCOMPLETE_URL is not defined');
}

export default function Home() {
	const [input, setInput] = useState<string>('');
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
	const router = useRouter();

	useEffect(() => {
		const query = input.trim();

		async function fetchSuggestions() {
			const response = await fetch(`${AUTOCOMPLETE_URL}${query}`);
			const data = await response.json();
			setSuggestions(data);
		}

		if (query.length >= 3) {
			fetchSuggestions();
		} else {
			setSuggestions([]);
		}
	}, [input]);

	function handleSubmission() {
		router.push(`/${input}`);
	}

	// handle input change by updating state
	function inputChange(event: ChangeEvent<HTMLInputElement>) {
		setInput(event.target.value);
	}

	return (
		<main>
			<Container>
				<Box>
					<div className={styles.primarySearchInterface}>
						<img
							src="/bus_stop_sign.png"
							alt="logo"
							style={{ maxHeight: '15vh' }}
							title="it's a great day to ride MTD!"
						/>
						<div className={styles.titleAndSearchBar}>
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
					</div>
				</Box>
				<Box>
					<ListSuggestions results={suggestions} />
				</Box>
			</Container>
		</main>
	);
}
