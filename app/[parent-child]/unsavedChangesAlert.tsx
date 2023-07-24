import { Alert, AlertTitle, Button } from '@mui/material';
import styles from './page.module.css';

// WIP!!!
export default function UnsavedChangesAlert() {
	console.log('UnsavedChangesAlert');

	return (
		<Alert
			severity="warning"
			sx={{
				fontSize: '110%',
				position: 'absolute',
				bottom: 0,
				zIndex: 3,
				padding: '1em',
				margin: '2em',
				alignItems: 'baseline',
				width: '90%',
			}}
			elevation={3}
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
			<AlertTitle>Careful — you have unsaved changes.</AlertTitle>
		</Alert>
	);
}
