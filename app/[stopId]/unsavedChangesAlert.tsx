import { Alert, AlertTitle, Button, Grow, Zoom } from '@mui/material';
import styles from './page.module.css';
import { useRecoilValue } from 'recoil';
import { selectedChildStopState } from '@state/serverDataState';

// WIP!!!
export default function UnsavedChangesAlert() {
	return (
		<Grow in={true}>
			<Alert
				severity="warning"
				sx={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					zIndex: 3,
					padding: '1em',
					margin: '2em',
				}}
				action={
					<div className={styles.buttonContainer}>
						<Button
							className={`${styles.alertButton} ${styles.discardButton}`}
							id="discard"
							color="inherit"
							// variant="outlined"
						>
							Discard
						</Button>
						<Button className={`${styles.alertButton} ${styles.saveButton}`} color="inherit" variant="outlined">
							Save Changes
						</Button>
					</div>
				}
			>
				<AlertTitle>
					<strong>Careful!</strong> — you have unsaved changes.
				</AlertTitle>
			</Alert>
		</Grow>
	);
}
