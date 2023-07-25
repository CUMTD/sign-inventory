
'use client';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

// for assembling tabs that are links
interface LinkTabProps {
	label: string;
	href: string;
}

// return a tab that is a link
function LinkTab(props: LinkTabProps) {
	return <Tab component="a" {...props} />;
}

export default function NavTabs() {
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

	return (
		<Tabs orientation="vertical" value={pageValue}>
			<LinkTab label="General" href={`/${stopId}/`} />
			<LinkTab label="Sign" href={`/${stopId}/sign`} />
			<LinkTab label="Accessibility" href={`/${stopId}/accessibility`} />
			<LinkTab label="Amenities" href={`/${stopId}/amenities`} />
			<LinkTab label="Notes" href={`/${stopId}/notes`} />
			<LinkTab label="Photo" href={`/${stopId}/photo`} />
		</Tabs>
	);
}
