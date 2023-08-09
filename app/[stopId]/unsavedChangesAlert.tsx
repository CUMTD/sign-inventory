import { Alert, AlertTitle, Button, Grow, Zoom } from '@mui/material';
import styles from './page.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { initialDataState, isDataModifiedSelector, modifiedDataState } from '@state/serverDataState';
import { useEffect } from 'react';

export default function UnsavedChangesAlert() {
	const isDataModified = useRecoilValue(isDataModifiedSelector);

	const [intialData, setInitialData] = useRecoilState(initialDataState);
	const [modifiedData, setModifiedData] = useRecoilState(modifiedDataState);

	// add unloadlistener to isDataModified to prevent accidental navigation
	useEffect(() => {
		function unloadListener(e: BeforeUnloadEvent) {
			if (isDataModified) {
				e.preventDefault();
				e.returnValue = '';
			}
		}
		window.addEventListener('beforeunload', unloadListener);
		return () => {
			window.removeEventListener('beforeunload', unloadListener);
		};
	}, [isDataModified]);

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
						left: 0,
						zIndex: 3,
						maxWidth: '59%',
						padding: '1em',
						margin: 'auto',
						marginBottom: '2em',
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
	}, 400);
}
