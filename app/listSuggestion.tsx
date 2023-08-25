'use client';

import { Card, CardContent } from "@mui/material";
import { Result } from "@t/searchSuggestion";
import Link from "next/link";
import styles from './listSuggestion.module.css';

interface Props {
	result: Result;
}

export default function ListSuggestion({ result: { id, name, city } }: Props) {
	// TODO: Remove inline styles
	return (
		<Card key={id} role="listitem">
			<CardContent>
				<Link key={id} className={styles.link} href={`/${id}`} style={{ display: 'flex', flexDirection: 'row' }}>
					{name} <span className={styles.suggestionLower}>{city}</span>
				</Link>
			</CardContent>
		</Card>
	);
}
