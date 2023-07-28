'use client';

import { Button, Stack } from '@mui/material';
import styles from '../page.module.css';
import Image from 'next/image';

export default function PhotoPage() {
	return (
		<>
			<Stack spacing={3}>
				<div className={styles.subSection}>
					<div className={styles.photoFrame}>No photo yet.</div>
					<Image src="/meme.jpg" width={500} height={900} alt="meme" />
					<Button variant="contained" color="secondary">
						Upload
					</Button>
				</div>
			</Stack>
		</>
	);
}
