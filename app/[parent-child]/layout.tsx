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
import RecoilProvider from '@components/recoilProvider';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { currentStop, serverNeighbors } from '@state/serverDataState';
import { Server } from 'http';
import GenerateButtons from './generateButtons';
interface Props {
	children: ReactNode;
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

// function CurrentData() {
// 	const data = useRecoilValue(serverNeighbors);
// 	return <div>{data.length}</div>;
// }

export default function Layout({ children }: Props) {
	const router = useRouter();

	// figure out which tab should be selected based on the url
	const pathname = usePathname();
	const stopId = pathname.split('/')[1];

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
	const setStopId = useSetRecoilState(currentStop);
	setStopId(stopId);
	console.log(stopId);
	// console.log('set to ', useRecoilValue(currentStop));

	return (
		<>
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
						{stopId}
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
							<GenerateButtons current={stopId} />
						</ButtonGroup>
					</Box>

					<Tabs orientation="vertical" value={pageValue}>
						<LinkTab label="General" href={`/${stopId}/`} />
						<LinkTab label="Sign" href={`/${stopId}/sign`} />
						<LinkTab label="Accessibility" href={`/${stopId}/accessibility`} />
						<LinkTab label="Amenities" href={`/${stopId}/amenities`} />
						<LinkTab label="Notes" href={`/${stopId}/notes`} />
						<LinkTab label="Photo" href={`/${stopId}/photo`} />
					</Tabs>
				</Box>
				<Box className={styles.tabPanels}>
					<div>{children}</div>
				</Box>
			</Box>
		</>
	);
}
