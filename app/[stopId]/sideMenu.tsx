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

interface Props {
	children: ReactNode;
}
// function DebugObserver(): ReactNode {
// 	const snapshot = useRecoilSnapshot();
// 	useEffect(() => {
// 		console.debug('The following atoms were modified:');
// 		for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
// 			console.debug(node.key, snapshot.getLoadable(node));
// 		}
// 	}, [snapshot]);

// 	return null;
// }

export default function SideMenu({ children }: Props) {
	const stopId = useRecoilValue(selectedParentStopState);
	const friendly_name = useRecoilValue(selectedStopFriendlyNameState);
	const currentChildStop = useRecoilValue(selectedChildStopState);
	return (
		<>
			{/* <DebugObserver /> */}
			<Image src={logo_svg} className={styles.logo} alt="MTD" width={125} height={125} />
			<Box className={styles.page}>
				<Box className={styles.sidebar}>
					<BackButton />
					<Typography variant="h3" component={'h1'} sx={{ marginBottom: '1rem' }}>
						{friendly_name}
					</Typography>
					<Typography
						variant="h5"
						component={'h2'}
						sx={{ marginBottom: '1rem', paddingRight: '1em' }}
						className={styles.stopId}
					>
						{stopId}:{currentChildStop}
					</Typography>
					<BoardingPointSelector />
					<Tabs />
				</Box>
				<Box className={styles.busyBox}>
					<BusyBox />
					<div>{children}</div>
				</Box>
			</Box>
		</>
	);
}
