'use client';
import throwError from '@/helpers/throwError';
import image from '@/public/bus_stop_sign.png';
import Suggestion from '@/types/suggestion';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, InputAdornment, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import ListSuggestions from './listsuggestions';
import styles from './page.module.css';

// grab the search suggestions api endpoint from the environment variables
const AUTOCOMPLETE_URL = process.env.NEXT_PUBLIC_AUTOCOMPLETE_URL ?? throwError('NEXT_PUBLIC_AUTOCOMPLETE_URL env variable is not defined');

export default function Home() {
	const [input, setInput] = useState<string>('');
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

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

	// handle input change by updating state
	function inputChange(event: ChangeEvent<HTMLInputElement>) {
		setInput(event.target.value);
	}

	return (
		<main>
			<Container>
				<Box>
					<div className={styles.primarySearchInterface}>
						<Image
							src={image}
							alt="logo"
							width={139}
							height={200}
							title="it's a great day to ride MTD!"
							placeholder='blur'
							priority
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
