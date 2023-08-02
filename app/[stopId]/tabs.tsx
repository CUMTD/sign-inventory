'use client';
import { Box, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useMemo } from 'react';
import Page from './accessibility/accessibility';
import { useRecoilState } from 'recoil';
import { selectedTabState } from '@state/serverDataState';

// for assembling tabs that are links
interface TabProps {
	label: string;
	href: string;
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export default function NavTabs() {
	const [value, setValue] = useRecoilState(selectedTabState);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		if (newValue) {
			setValue(newValue);
		}
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="basic tabs example">
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
