import { Alert, AlertTitle, Button, Grow, Zoom } from '@mui/material';
import styles from './page.module.css';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { initialDataState, isDataModifiedSelector, modifiedDataState } from '@state/serverDataState';

// WIP!!!

export default function UnsavedChangesAlert() {
	const isDataModified = useRecoilValue(isDataModifiedSelector);

	const [intialData, setInitialData] = useRecoilState(initialDataState);
	const [modifiedData, setModifiedData] = useRecoilState(modifiedDataState);

	function saveChanges() {
		try {
			// TODO: attempt to save changes

			setInitialData(modifiedData);
		} catch (error) {
			// TODO: display error on failure
		}
	}

	function discardChanges() {
		setModifiedData(intialData);
	}

	if (isDataModified) {
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
					className="unsavedChangesAlert"
					action={
						<div className={styles.buttonContainer}>
							<Button
								className={`${styles.alertButton} ${styles.discardButton}`}
								onClick={discardChanges}
								id="discard"
								color="inherit"
							>
								Discard
							</Button>
							<Button
								className={`${styles.alertButton} ${styles.saveButton}`}
								color="inherit"
								variant="outlined"
								onClick={saveChanges}
							>
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
	return null;
}

export function blinkIt() {
	// trigger the animation
	const alert = document.querySelector(`.unsavedChangesAlert`);

	alert?.classList.add(styles.blinkIt);
	// remove after 3 sec
	setTimeout(() => {
		alert?.classList.remove(styles.blinkIt);
	}, 1000);
}
