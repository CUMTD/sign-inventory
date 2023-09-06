import { Alert, AlertTitle, IconButton, Snackbar } from '@mui/material';
import { displaySnackbarState } from '@state/serverDataState';
import { useRecoilState } from 'recoil';
import styles from './saveConfirmationSnackbar.module.css';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function SaveConfirmationSnackbar() {
	const [snackbarState, setSnackbarState] = useRecoilState(displaySnackbarState);

	return (
		<Snackbar
			open={snackbarState.open}
			autoHideDuration={5000}
			onClose={() => setSnackbarState({ ...snackbarState, open: false })}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		>
			<Alert severity={snackbarState.state} className={styles.snackbar}>
				<AlertTitle>{snackbarState.state == 'success' ? 'Save successful.' : 'Error saving changes!'}</AlertTitle>
				{snackbarState.state == 'error' ? 'Your changes have not been saved. Please try again.' : ''}
			</Alert>
		</Snackbar>
	);
}
