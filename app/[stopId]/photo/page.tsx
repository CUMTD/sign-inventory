'use client';

import { Button, Stack } from '@mui/material';
import styles from '../page.module.css';

interface Props {
	params: {
		parent: string;
		child: string;
	};
}

export default function Page({ params: { parent, child } }: Props) {
	return (
		<>
			<Stack spacing={3}>
				<div className={styles.photoFrame}>No photo yet.</div>
				<Button variant="contained" color="secondary">
					Upload
				</Button>
			</Stack>
		</>
	);
}
