'use client';

import { putParentStop, putStopPhoto } from '@helpers/fetchDataHelpers';
import { Alert, AlertTitle, Button, LinearProgress } from '@mui/material';
import {
	initialDataState,
	isBlinkWarningState,
	isDataModifiedSelector,
	isUpdatedTodayState,
	modifiedDataState,
	selectedStopIdSelector,
} from '@state/serverDataState';

import assertUnreachable from '@helpers/assertUnreachable';
import { useTimeout } from '@hooks/useTimeout';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './unsavedChangesAlert.module.css';

interface AlertBoxProps {
	variant: 'pendingChanges' | 'success' | 'error';
	show: boolean;
	shake: boolean;
	loading: boolean;
	saveCallback: () => void;
	discardCallback: () => void;
}

function AlertBox({ variant, show, shake, loading, saveCallback, discardCallback }: AlertBoxProps) {
	const classes = clsx({
		[styles.alert]: true,
		[styles.show]: show,
		[styles.shake]: shake,
		[styles.success]: variant === 'success',
		[styles.error]: variant === 'error',
	});
	const severity = useMemo(() => {
		switch (variant) {
			case 'success':
				return 'success';
			case 'error':
				return 'error';
			case 'pendingChanges':
				return 'warning';
			default:
				assertUnreachable(variant);
		}
	}, [variant]);

	if (variant === 'pendingChanges') {
		return (
			<Alert
				severity={severity}
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

	const title = severity === 'success' ? 'Save successful!' : 'Save failed!';
	const text = severity === 'success' ? 'Your changes have been saved.' : 'Your changes could not be saved.';
	return (
		<Alert severity={severity} className={classes}>
			<AlertTitle>
				<strong>{title}</strong>
			</AlertTitle>
			{text}
		</Alert>
	);
}

// TODO : set updated today date to value returned from PUT request
// also, set initial data to returned values from PUT request

// handles the dialog that comes up when user has unsaved changes
export default function UnsavedChangesAlert() {
	const isDataModified = useRecoilValue(isDataModifiedSelector);
	const [initialData, setInitialData] = useRecoilState(initialDataState);
	const [modifiedData, setModifiedData] = useRecoilState(modifiedDataState);
	const setIsUpdatedToday = useSetRecoilState(isUpdatedTodayState);
	const selectedStopId = useRecoilValue(selectedStopIdSelector);
	const [isBlinkWarning, setIsBlinkWarning] = useRecoilState(isBlinkWarningState);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (success || error || isDataModified) {
			setShow(true);
		}
	}, [error, isDataModified, success]);

	useEffect(() => {
		if (!isDataModified) {
			setShow(false);
		}
	}, [isDataModified]);

	const stopShake = () => setIsBlinkWarning(false);

	const hide = () => {
		setShow(false);
		// need advice on this
		setSuccess(false);
		setError(false);
	};

	const hideTimeout = useMemo(() => (show && !isDataModified ? 5_000 : null), [isDataModified, show]);
	const shakeTimeout = useMemo(() => (isBlinkWarning ? 500 : null), [isBlinkWarning]);

	useTimeout(stopShake, shakeTimeout);
	useTimeout(hide, hideTimeout);

	const variant = useMemo(() => {
		if (success) {
			return 'success';
		}
		if (error) {
			return 'error';
		}

		return 'pendingChanges';
	}, [success, error]);

	async function saveChanges(): Promise<void> {
		if (modifiedData) {
			setLoading(true);

			try {
				if (modifiedData.content !== initialData?.content) {
					await putStopPhoto(selectedStopId, modifiedData.content);
				}
			} catch (error) {
				console.error('Could not save picture', error);
				setSuccess(false);
				setError(true);
			}

			let response = false;
			try {
				response = await putParentStop(modifiedData);
			} catch (error) {
				console.error('Could not save stop', error);
				setSuccess(false);
				setError(true);
			}

			if (response) {
				setSuccess(true);
				setError(false);
				setInitialData(modifiedData);
				setIsUpdatedToday(true);
			} else {
				setSuccess(false);
				setError(true);
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
			variant={variant}
			show={show}
			shake={isBlinkWarning}
			loading={loading}
			saveCallback={saveChanges}
			discardCallback={discardChanges}
		/>
	);
}
