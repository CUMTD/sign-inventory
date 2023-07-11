'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhotoPage from './photoPage';
import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GeneralPage from './generalPage';
import AmenitiesPage from './amenitiesPage';
import NotesPage from './notesPage';
import SignPage from './signPage';
import AccessibilityPage from './accessibilityPage';
import UnsavedChangesAlert from './unsavedChangesAlert';

import styles from './page.module.css';
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

interface Props {
	stopName: string;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		'id': `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

function goBack() {
	window.history.back();
}
const buttons = [
	<Button key="one" variant="contained">
		NW Corner
	</Button>,
	<Button key="two">NE Corner</Button>,
	<Button key="three">SE Corner</Button>,
	<Button key="four">SW Corner</Button>,
];

export function childStopButtons() {
	return (
		<Box
			className={styles.childStopButtons}
			sx={{
				'display': 'flex',
				'& > *': {
					width: '100%',
					margin: `1em 1em 1em 0em`,
				},
			}}
		>
			<ButtonGroup orientation="vertical">{buttons}</ButtonGroup>
		</Box>
	);
}

export default function VerticalTabs({ stopName }: Props) {
	const [value, setValue] = React.useState(0);
	const [childStop, setChildStop] = React.useState('');

	const handleChildStopSelection = (event: SelectChangeEvent) => {
		setChildStop(event.target.value);
	};

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<img src="logo.svg" className={styles.logo} alt="MTD" />
			{/* <UnsavedChangesAlert /> */}
			<Box className={styles.page}>
				<Box className={styles.sidebar}>
					<Button sx={{ justifyContent: 'left' }} startIcon={<ArrowBackIcon />} onClick={goBack}>
						back
					</Button>
					<Typography variant="h3" component={'h1'} sx={{ marginBottom: '1rem' }}>
						Results
					</Typography>
					<Typography variant="h5" component={'h2'} sx={{ marginBottom: '1rem' }}>
						Stop name & Stop Name Terminal Union Green Blah Blah
					</Typography>
					{childStopButtons()}

					<Tabs
						orientation="vertical"
						value={value}
						onChange={handleChange}
						className={styles.tabs}
						sx={{ borderRight: 1, borderColor: 'divider', width: '22vw', height: '100%' }}
					>
						<Tab label="General" {...a11yProps(0)} />
						<Tab label="Sign" {...a11yProps(1)} />
						<Tab label="Accessibility" {...a11yProps(2)} />
						<Tab label="Amenities" {...a11yProps(3)} />
						<Tab label="Notes" {...a11yProps(4)} />
						<Tab label="Photo" {...a11yProps(5)} />
					</Tabs>
				</Box>
				<Box className={styles.tabPanels}>
					<div>
						<TabPanel value={value} index={0}>
							<GeneralPage />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<SignPage />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<AccessibilityPage />
						</TabPanel>
						<TabPanel value={value} index={3}>
							<AmenitiesPage />
						</TabPanel>
						<TabPanel value={value} index={4}>
							<NotesPage />
						</TabPanel>
						<TabPanel value={value} index={5}>
							<PhotoPage />
						</TabPanel>
					</div>
				</Box>
			</Box>
		</>
	);
}
