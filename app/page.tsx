'use client';

import Suggestion from '@/types/suggestion';
import styles from './page.module.css';
import { Space_Grotesk } from 'next/font/google';
import { Inter } from 'next/font/google';

import { useRouter } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import ListSuggestions from './listsuggestions';

const space = Space_Grotesk({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

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
		<main className={inter.className}>
			<div className={styles.card}>
				<h1 className={space.className}>Sign Inventory</h1>
				<input
					className={`${styles.searchBox} ${inter.className}`}
					type="text"
					placeholder="Ex. Green and Orchard"
					required
					autoFocus
					onChange={inputChange}
				/>
				<ListSuggestions results={suggestions} />
			</div>
		</main>
	);
}
