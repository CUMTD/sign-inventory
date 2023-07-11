import { TextField, Typography } from '@mui/material';

import styles from './tabPageStyles.module.css';

export default function NotesPage() {
	return (
		<>
			<Typography variant="h6" component="h3">
				Notes
			</Typography>
			<TextField
				className={styles.notes}
				placeholder="This is certainly a bus stop."
				multiline
				rows={4}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</>
	);
}
