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
import styles from './page.module.css';
import Tabs from './tabs';
import UnsavedChangesAlert from './unsavedChangesAlert';

interface Props {
	children: ReactNode;
}

export default function SideMenu({ children }: Props) {
	const stopId = useRecoilValue(selectedParentStopState);
	const currentChildStop = useRecoilValue(selectedChildStopState);
	// TODO: Inline styles
	return (
		<>
			<Box className={styles.page}>
				<Box className={styles.sidebar}>
					<BackButton />
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
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'left',
							alignItems: 'right',
							gap: '1rem',
							marginTop: 'auto',
							marginBottom: '-1em',
						}}
					>
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
