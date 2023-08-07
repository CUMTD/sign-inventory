'use client';

import { Typography } from '@mui/material';
import { selectedChildStopSelector } from '@state/serverDataState';
import { useRecoilValue } from 'recoil';

// display the last updated dateTime at the bottom of every page
export default function GeneralPage() {
	var dateTime: string = useRecoilValue(selectedChildStopSelector)?.lastUpdated ?? 'Unknown';
	const date = new Date(dateTime);

	return (
		<Typography variant="subtitle1" component="h3">
			Last updated {date.toLocaleString() === 'Invalid Date' ? 'N/A' : date.toLocaleString()}
		</Typography>
	);
}
