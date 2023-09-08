'use client';

import { putParentStop, putStopPhoto } from '@helpers/fetchDataHelpers';
import { Alert, AlertTitle, Button, LinearProgress } from '@mui/material';
import {
	displaySnackbarState,
	initialDataState,
	isBlinkWarningState,
	isDataModifiedSelector,
	modifiedDataState,
	selectedStopIdSelector,
	updateModifiedAndInitialDataState,
} from '@state/serverDataState';

import { useTimeout } from '@hooks/useTimeout';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './unsavedChangesAlert.module.css';
import { ChildStop } from '@t/apiResponse';

interface AlertBoxProps {
	show: boolean;
	shake: boolean;
	loading: boolean;
	saveCallback: () => void;
	discardCallback: () => void;
}

function AlertBox({ shake, show, loading, saveCallback, discardCallback }: AlertBoxProps) {
	const classes = clsx({
		[styles.alert]: true,
		[styles.show]: show,

		[styles.shake]: shake,
	});

	return (
		<Alert
			severity="warning"
			className={classes}
			action={
				<div className={styles.buttonContainer}>
					<Button className={` ${styles.discardButton}`} onClick={discardCallback} id="discard" color="inherit">
						Discard
					</Button>

					<Button className={` ${styles.saveButton}`} color="inherit" variant="outlined" onClick={saveCallback}>
						Save Changes
					</Button>
				</div>
			}
		>
			<AlertTitle>
				<strong>Careful!</strong> — you have unsaved changes.
			</AlertTitle>
			{loading && <LinearProgress sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} color="inherit" />}
		</Alert>
	);
}

// handles the dialog that comes up when user has unsaved changes
export default function UnsavedChangesAlert() {
	const isDataModified = useRecoilValue(isDataModifiedSelector);
	const [initialData, setInitialData] = useRecoilState(initialDataState);
	const [modifiedData, setModifiedData] = useRecoilState(modifiedDataState);
	const selectedStopId = useRecoilValue(selectedStopIdSelector);
	const [isBlinkWarning, setIsBlinkWarning] = useRecoilState(isBlinkWarningState);

	const setBothDataStates = useSetRecoilState(updateModifiedAndInitialDataState);

	const setSnackbarState = useSetRecoilState(displaySnackbarState);

	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (isDataModified) {
			setShow(true);
		}
		if (!isDataModified) {
			setShow(false);
		}
	}, [isDataModified]);

	const stopShake = () => setIsBlinkWarning(false);

	const hide = () => {
		console.log('Hiding alert');
		setShow(false);
	};

	const hideTimeout = useMemo(() => (show && !isDataModified ? 5_000 : null), [isDataModified, show]);
	const shakeTimeout = useMemo(() => (isBlinkWarning ? 500 : null), [isBlinkWarning]);

	useTimeout(stopShake, shakeTimeout);
	useTimeout(hide, hideTimeout);

	async function saveChanges(): Promise<void> {
		if (modifiedData) {
			setLoading(true);

			try {
				if (modifiedData.content !== initialData?.content) {
					await putStopPhoto(selectedStopId, modifiedData.content);
				}
			} catch (error) {
				console.error('Could not save picture', error);
				setSnackbarState({ open: true, state: 'error' });
			}

			let response: Response = new Response();
			try {
				response = await putParentStop(modifiedData);
			} catch (error) {
				console.error('Could not save stop', error);
				setSnackbarState({ open: true, state: 'error' });
			}

			if (response.ok) {
				const newChildStopData = (await response.json()) as ChildStop;
				setBothDataStates({
					initial: newChildStopData,
					modified: newChildStopData,
				});

				setSnackbarState({ open: true, state: 'success' });
			} else {
				setSnackbarState({ open: true, state: 'error' });
			}

			setLoading(false);
		}
	}

	// throw away changes and revert to initial data
	function discardChanges() {
		setLoading(false);
		setModifiedData(initialData);
	}

	return (
		<AlertBox
			show={show}
			shake={isBlinkWarning}
			loading={loading}
			saveCallback={saveChanges}
			discardCallback={discardChanges}
		/>
	);
}
