'use client';

import { TextField, Typography } from '@mui/material';
import styles from '../../tabPageStyles.module.css';

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
