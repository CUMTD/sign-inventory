'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import logo_svg from '@public/logo.svg';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useMemo } from 'react';
import styles from './page.module.css';

interface Props {
	params: {
		parent: string;
	};
	children: ReactNode;
}

// template function for generating aria labels
function a11yProps(index: number) {
	return {
		'id': `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

// for assembling tabs that are links
interface LinkTabProps {
	label: string;
	href: string;
}

// return a tab that is a link
function LinkTab(props: LinkTabProps) {
	return <Tab component="a" {...props} />;
}

export default function Layout({ params: { parent: stopName }, children }: Props) {
	const router = useRouter();

	// figure out which tab should be selected based on the url
	const pathname = usePathname();
	const page = pathname.split('/').slice(-1)[0];
	const pageValue = useMemo(() => {
		switch (page) {
			case 'sign':
				return 1;
			case 'accessibility':
				return 2;
			case 'amenities':
				return 3;
			case 'notes':
				return 4;
			case 'photo':
				return 5;
			default:
				return 0;
		}
	}, [page]);

	function goBack() {
		router.push('/');
	}

	return (
		<>
			{/* <UnsavedChangesAlert /> */}

			<Image src={logo_svg} className={styles.logo} alt="MTD" width={125} height={125} />
			<Box className={styles.page}>
				<Box className={styles.sidebar}>
					<Button sx={{ justifyContent: 'left' }} startIcon={<ArrowBackIcon />} onClick={goBack}>
						back to search
					</Button>
					<Typography variant="h3" component={'h1'} sx={{ marginBottom: '1rem' }}>
						Results
					</Typography>
					<Typography variant="h5" component={'h2'} sx={{ marginBottom: '1rem', paddingRight: '1em' }}>
						{stopName}
					</Typography>

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
							<Button>NW Corner</Button>
							<Button >NE Corner</Button>
							<Button >SE Corner</Button>
							<Button >SW Corner</Button>
						</ButtonGroup>
					</Box>

					<Tabs orientation="vertical" value={pageValue}>
						<LinkTab label="General" href={`/${stopName}/${1}/`} {...a11yProps(0)} />
						<LinkTab label="Sign" href={`/${stopName}/${1}/sign`} {...a11yProps(1)} />
						<LinkTab label="Accessibility" href={`/${stopName}/${1}/accessibility`} {...a11yProps(2)} />
						<LinkTab label="Amenities" href={`/${stopName}/${1}/amenities`} {...a11yProps(3)} />
						<LinkTab label="Notes" href={`/${stopName}/${1}/notes`} {...a11yProps(4)} />
						<LinkTab label="Photo" href={`/${stopName}/${1}/photo`} {...a11yProps(5)} />
					</Tabs>
				</Box>
				<Box className={styles.tabPanels}>
					<div>{children}</div>
				</Box>
			</Box>
		</>
	);
}
