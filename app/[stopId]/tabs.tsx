'use client';
import { Box, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedTabState } from '@state/serverDataState';

interface TabProps {
	label: string;
	href: string;
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export default function NavTabs() {
	// handle the currently selected tab
	const [value, setValue] = useRecoilState(selectedTabState);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs orientation="vertical" value={value} onChange={handleChange}>
					<Tab label="General" />
					<Tab label="Sign" />
					<Tab label="Accessibility" />
					<Tab label="Amenities" />
					<Tab label="Notes" />
					<Tab label="Photo" />
				</Tabs>
			</Box>
		</Box>
	);
}
