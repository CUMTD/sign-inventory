import { Alert, AlertTitle, Box, Button, CircularProgress, Grow, LinearProgress, Zoom } from '@mui/material';
import styles from './page.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { initialDataState, isDataModifiedSelector, modifiedDataState } from '@state/serverDataState';
import { useEffect } from 'react';
import { putParentStop } from '@helpers/fetchDataHelpers';
import React from 'react';
import { green } from '@mui/material/colors';

// handles the dialog that comes up when user has unsaved changes
export default function UnsavedChangesAlert() {
	const isDataModified = useRecoilValue(isDataModifiedSelector);
	const [intialData, setInitialData] = useRecoilState(initialDataState);
	const [modifiedData, setModifiedData] = useRecoilState(modifiedDataState);

	const [loading, setLoading] = React.useState(false);

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

	// make a PUT request with putParentStop() and handle response
	function saveChanges() {
		if (modifiedData) {
			try {
				setLoading(true);
				putParentStop(modifiedData).then((res) => {
					setLoading(false);

					if (res) {
						showSuccessfulSaveDialog();
						console.log('saved changes');
						setInitialData(modifiedData);
					} else {
						showErrorSaveDialog();
						console.log('error saving changes');
					}
				});
			} catch (error) {
				console.error(error);
				showErrorSaveDialog();
				console.log('error saving changes');
			}
		}
	}

	// throw away changes and revert to initial data
	function discardChanges() {
		setLoading(false);

		setModifiedData(intialData);
	}

	// display the save dialog if there are unsaved changes
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
					{loading && (
						<LinearProgress sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} color="inherit" />
					)}
				</Alert>
			</Grow>
		);
	}
	return null;
}

// save successful dialog
export function SaveSuccessfulAlert() {
	return (
		<Grow in={true}>
			<Alert
				severity="success"
				sx={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					left: 0,
					zIndex: 3,
					maxWidth: ' 50%',
					padding: '1em',
					margin: 'auto',
					marginBottom: '2em',
					display: 'none',
					border: '3px solid',
				}}
				className="saveSuccessfulAlert"
			>
				<AlertTitle>
					<strong>Save successful.</strong>
				</AlertTitle>
			</Alert>
		</Grow>
	);
}

// save error dialog
export function SaveErrorAlert() {
	return (
		<Grow in={true}>
			<Alert
				severity="error"
				sx={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					left: 0,
					zIndex: 3,
					maxWidth: ' 50%',
					padding: '1em',
					margin: 'auto',
					marginBottom: '2em',
					display: 'none',
					border: '3px solid',
				}}
				className="saveErrorAlert"
			>
				<AlertTitle>
					<strong>Error saving changes</strong>
				</AlertTitle>
				Ensure you are connected to the internet and try again.
			</Alert>
		</Grow>
	);
}

// blinks the save dialog when user tries to navigate away
export function blinkWarnSaveDialog() {
	const alert = document.querySelector(`.unsavedChangesAlert`);
	alert?.classList.add(styles.blinkIt);
	setTimeout(() => {
		alert?.classList.remove(styles.blinkIt);
	}, 400);
}

// shows the save successful dialog
function showSuccessfulSaveDialog() {
	const alert = document.querySelector(`.saveSuccessfulAlert`);
	alert?.classList.add(styles.showDialog);
	setTimeout(() => {
		alert?.classList.remove(styles.showDialog);
	}, 3000);
}

// shows the save error dialog
function showErrorSaveDialog() {
	const alert = document.querySelector(`.saveErrorAlert`);
	alert?.classList.add(styles.showDialog);
	setTimeout(() => {
		alert?.classList.remove(styles.showDialog);
	}, 5000);
}
