'use client';

import { Card, CardContent } from '@mui/material';
import { Result } from '@t/searchSuggestion';
import Link from 'next/link';
import styles from './listSuggestion.module.css';
import { useEffect, useRef } from 'react';

interface Props {
	result: Result;
}

export default function ListSuggestion({ result: { id, name, city } }: Props) {
	return (
		<Card key={id} role="listitem">
			<Link key={id} href={`/${id}`} className={styles.suggestion}>
				<div className={styles.linkBox}>
					<span className={styles.suggestionName}>{name}</span>
					<span className={styles.suggestionTown}>{city}</span>
				</div>
			</Link>
		</Card>
	);
}
