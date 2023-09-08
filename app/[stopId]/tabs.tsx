'use client';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { selectedTabState } from '@state/serverDataState';
import React, { SyntheticEvent } from 'react';
import { useRecoilState } from 'recoil';
import styles from './tabs.module.css';

export default function NavTabs() {
	// handle the currently selected tab
	const [value, setValue] = useRecoilState(selectedTabState);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box className={styles.tabContainer}>
			<Tabs orientation="vertical" value={value} onChange={handleChange}>
				<Tab label="General" />
				<Tab label="Sign" />
				<Tab label="Accessibility" />
				<Tab label="Amenities" />
				<Tab label="Notes" />
				<Tab label="Photo" />
			</Tabs>
		</Box>
	);
}
