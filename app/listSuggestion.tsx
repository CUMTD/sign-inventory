'use client';

import { Card, CardContent } from '@mui/material';
import { Result } from '@t/searchSuggestion';
import Link from 'next/link';
import styles from './listSuggestion.module.css';

interface Props {
	result: Result;
}

export default function ListSuggestion({ result: { id, name, city } }: Props) {
	return (
		<Card key={id} role="listitem">
			<CardContent>
				<Link key={id} className={styles.link} href={`/${id}`}>
					{name} <span className={styles.suggestionLower}>{city}</span>
				</Link>
			</CardContent>
		</Card>
	);
}
