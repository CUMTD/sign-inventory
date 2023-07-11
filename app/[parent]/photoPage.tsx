import { Button, Stack } from '@mui/material';

import styles from './tabPageStyles.module.css';
export default function PhotoPage() {
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
