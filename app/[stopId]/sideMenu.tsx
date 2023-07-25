'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo_svg from '@public/logo.svg';
import { currentStopIdState } from '@state/serverDataState';
import Image from 'next/image';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import BackButton from './backButton';
import BoardingPointSelector from './boardingPointSelector';
import styles from './page.module.css';
import Tabs from './tabs';

interface Props {
	children: ReactNode;
}

export default function SideMenu({ children }: Props) {
	const stopId = useRecoilValue(currentStopIdState);

	return (
		<>
			<Image src={logo_svg} className={styles.logo} alt="MTD" width={125} height={125} />
			<Box className={styles.page}>
				<Box className={styles.sidebar}>
					<BackButton />
					<Typography variant="h3" component={'h1'} sx={{ marginBottom: '1rem' }}>
						Results
					</Typography>
					<Typography variant="h5" component={'h2'} sx={{ marginBottom: '1rem', paddingRight: '1em' }}>
						{stopId}
					</Typography>

					<BoardingPointSelector />

					<Tabs />
				</Box>
				<Box className={styles.tabPanels}>
					<div>{children}</div>
				</Box>
			</Box>
		</>
	);
}
