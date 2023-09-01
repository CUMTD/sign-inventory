'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo_svg from '@public/logo.svg';
import { selectedChildStopState, selectedParentStopState } from '@state/serverDataState';
import Image from 'next/image';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import AuthBox from '../authBox';
import BackButton from './backButton';
import BoardingPointSelector from './boardingPointSelector';
import BusyBox from './busyBox';
import styles from './sideMenu.module.css';
import Tabs from './tabs';
import UnsavedChangesAlert from './unsavedChangesAlert';

interface Props {
	children: ReactNode;
}

export default function SideMenu({ children }: Props) {
	const stopId = useRecoilValue(selectedParentStopState);
	const currentChildStop = useRecoilValue(selectedChildStopState);
	return (
		<>
			<Box className={styles.page}>
				<Box className={styles.sidebar}>
					<BackButton />
					<Typography variant="h5" component={'h2'} className={styles.stopId}>
						{stopId}:{currentChildStop}
					</Typography>
					<BoardingPointSelector />
					<Tabs />
					<div className={styles.authBox}>
						<AuthBox />
					</div>
					<Image src={logo_svg} className={styles.logo} alt="MTD" width={125} height={125} />
					<UnsavedChangesAlert />
				</Box>
				<div className={styles.busyBox}>
					<BusyBox /> {children}
				</div>
			</Box>
		</>
	);
}
