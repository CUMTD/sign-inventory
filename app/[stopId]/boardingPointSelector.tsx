'use client';

import { ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import GenerateButtons from './generateButtons';
import styles from './boardingPointSelector.module.css';

export default function BoardingPointSelector() {
	return (
		<Box className={styles.selector}>
			<ButtonGroup className={styles.childStopButtons} orientation="vertical">
				<GenerateButtons />
			</ButtonGroup>
		</Box>
	);
}
