'use client';

import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { lastUpdatedSelector } from '@state/serverDataState';
import { useRecoilValue } from 'recoil';

// display the last updated dateTime at the bottom of every page
export default function DefaultTabItems() {
	const lastUpdated = useRecoilValue(lastUpdatedSelector);

	return (
		<>
			<Typography variant="subtitle1" component="h3" sx={{ marginBottom: '10vh' }}>
				Last updated {lastUpdated}
			</Typography>
		</>
	);
}
