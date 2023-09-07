'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { selectedChildStopState, selectedParentStopState } from '@state/serverDataState';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import AuthBox from '../authBox';
import BackButton from './backButton';
import BoardingPointSelector from './boardingPointSelector';
import BusyBox from './busyBox';
import styles from './sideMenu.module.css';
import Tabs from './tabs';
import UnsavedChangesAlert from './unsavedChangesAlert';
import SaveConfirmationSnackbar from './saveConfirmationSnackbar';
import TopBar from './topBar';

interface Props {
	children: ReactNode;
}

export default function SideMenu({ children }: Props) {
	const stopId = useRecoilValue(selectedParentStopState);
	const currentChildStop = useRecoilValue(selectedChildStopState);
	return (
		<>
			<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
				<TopBar />

				<Box className={styles.page}>
					<Box className={styles.sidebar}>
						<BackButton />
						<Typography variant="h5" component={'h2'} className={styles.stopId}>
							{stopId}:{currentChildStop}
						</Typography>
						<BoardingPointSelector />
						<Tabs />

						<UnsavedChangesAlert />
						<SaveConfirmationSnackbar />
					</Box>
					<div className={styles.busyBox}>
						<BusyBox /> {children}
					</div>
				</Box>
			</Box>
		</>
	);
}
