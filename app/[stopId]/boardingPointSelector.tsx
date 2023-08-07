'use client';

import { ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import GenerateButtons from './generateButtons';
import styles from './page.module.css';

export default function BoardingPointSelector() {
	return (
		<Box
			sx={{
				'display': 'flex',
				'& > *': {
					width: '100%',
					margin: `1em 1em 1em 0em`,
				},
			}}
		>
			<ButtonGroup className={styles.childStopButtons} orientation="vertical">
				<GenerateButtons />
			</ButtonGroup>
		</Box>
	);
}
