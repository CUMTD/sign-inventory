'use client';

import { Button, Stack } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';

function displayPhoto(byteStream: string) {
	if (byteStream == null) {
		return <div className={styles.photoFrame}>No photo yet.</div>;
	} else {
		return <img src={'data:image/jpeg;base64,' + byteStream} />;
	}
}

export default function PhotoPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);
	return (
		<>
			<Stack spacing={3}>
				<div className={styles.subSection}>
					{displayPhoto(stop.content)}
					<Button variant="contained" color="secondary">
						Upload
					</Button>
				</div>
			</Stack>
		</>
	);
}
