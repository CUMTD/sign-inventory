'use client';

import { TextField, Typography } from '@mui/material';
import styles from '../tabPageStyles.module.css';

interface Props {
	params: {
		parent: string;
		child: string;
	};
}

export default function Page({ params: { parent, child } }: Props) {
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
