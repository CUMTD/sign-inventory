'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo_svg from '@public/logo.svg';
import { selectedChildStopState, selectedParentStopState, selectedStopFriendlyNameState } from '@state/serverDataState';
import Image from 'next/image';
import { ReactNode, useEffect } from 'react';
import { useRecoilSnapshot, useRecoilValue } from 'recoil';
import BackButton from './backButton';
import BoardingPointSelector from './boardingPointSelector';
import styles from './page.module.css';
import Tabs from './tabs';
import BusyBox from './busyBox';
import UnsavedChangesAlert, { SaveErrorAlert, SaveSuccessfulAlert } from './unsavedChangesAlert';

interface Props {
	children: ReactNode;
}

export default function SideMenu({ children }: Props) {
	const stopId = useRecoilValue(selectedParentStopState);
	const currentChildStop = useRecoilValue(selectedChildStopState);
	return (
		<>
			<Image src={logo_svg} className={styles.logo} alt="MTD" width={125} height={125} />
			<Box className={styles.page}>
				<Box className={styles.sidebar}>
					<BackButton />
					<Typography variant="h3" component={'h1'} sx={{ marginBottom: '1rem' }}>
						{/* {friendly_name} */}
					</Typography>
					<Typography
						variant="h5"
						component={'h2'}
						sx={{
							marginBottom: '1rem',
							paddingRight: '1em',
							color: 'text.secondary',
							fontFamily: 'monospace',
							fontWeight: 600,
						}}
						className={styles.stopId}
					>
						{stopId}:{currentChildStop}
					</Typography>
					<BoardingPointSelector />
					<Tabs />
					<UnsavedChangesAlert />
					<SaveSuccessfulAlert />
					<SaveErrorAlert />
				</Box>
				<Box className={styles.busyBox}>
					<BusyBox />
					<div>{children}</div>
				</Box>
			</Box>
		</>
	);
}
