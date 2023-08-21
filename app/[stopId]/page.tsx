'use client';

import { Typography } from '@mui/material';
import { isUpdatedTodayState, selectedChildStopSelector } from '@state/serverDataState';
import { useRecoilValue } from 'recoil';

// display the last updated dateTime at the bottom of every page
export default function GeneralPage() {
	var dateTime: Date = useRecoilValue(selectedChildStopSelector)?.lastUpdated ?? 'Invalid Date';
	const today = useRecoilValue(isUpdatedTodayState);
	const date = new Date(dateTime);

	return (
		<Typography variant="subtitle1" component="h3" sx={{ marginBottom: '10vh' }}>
			Last updated {today ? 'today' : date.toLocaleString() === 'Invalid Date' ? 'N/A' : date.toLocaleString()}
		</Typography>
	);
}
