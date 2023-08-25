import { getSiblings } from '@helpers/fetchDataHelpers';
import { ReactNode } from 'react';
import ServerDataStateSubscriber from './serverDataStateSubscriber';
import SideMenu from './sideMenu';
import ChildStopRecoilRoot from './childStopRecoilRoot';
// import 'server-only';

interface Props {
	params: {
		stopId: string;
	};
	children: ReactNode;
}

export default async function Layout({ params: { stopId }, children }: Props) {
	const childStops = await getSiblings(stopId);

	return (
		<>
			<ChildStopRecoilRoot stopId={stopId} childStops={childStops}>
				<ServerDataStateSubscriber />
				<SideMenu>{children}</SideMenu>
			</ChildStopRecoilRoot>
		</>
	);
}
