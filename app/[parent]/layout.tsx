'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useMemo } from 'react';
import styles from './page.module.css';

interface Props {
	params: {
		parent: string;
	}
	children: ReactNode;
}

function a11yProps(index: number) {
	return {
		'id': `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
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

interface LinkTabProps {
	label: string;
	href: string;
}

function LinkTab(props: LinkTabProps) {
	return (
		<Tab component="a" {...props} />
	);
}

export default function Layout({ params: { parent: stopName }, children }: Props) {
	const router = useRouter();

	const pathname = usePathname();
	const page = pathname.split('/').slice(-1)[0];
	const pageValue = useMemo(() => {
		switch (page) {
			case 'sign': return 1;
			case 'accessibility': return 2;
			case 'amenities': return 3;
			case 'notes': return 4;
			case 'photo': return 5;
			default: return 0;
		}
	}, [page]);


	function goBack() {
		router.back();
	}

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
						value={pageValue}
						className={styles.tabs}
						sx={{ borderRight: 1, borderColor: 'divider', width: '22vw', height: '100%' }}
					>
						<LinkTab label="General" href={`/${stopName}/${1}/`} {...a11yProps(0)} />
						<LinkTab label="Sign" href={`/${stopName}/${1}/sign`} {...a11yProps(1)} />
						<LinkTab label="Accessibility" href={`/${stopName}/${1}/accessibility`} {...a11yProps(2)} />
						<LinkTab label="Amenities" href={`/${stopName}/${1}/amenities`} {...a11yProps(3)} />
						<LinkTab label="Notes" href={`/${stopName}/${1}/notes`} {...a11yProps(4)} />
						<LinkTab label="Photo" href={`/${stopName}/${1}/photo`} {...a11yProps(5)} />
					</Tabs>
				</Box>
				<Box className={styles.tabPanels}>
					<div>
						{children}
					</div>
				</Box>
			</Box >
		</>
	);
}
