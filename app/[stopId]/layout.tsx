import { getDevelopmentTypes, getPoleTypes, getSiblings } from '@helpers/fetchDataHelpers';
import { ReactNode } from 'react';
import 'server-only';
import ChildStopRecoilRoot from './childStopRecoilRoot';
import ServerDataStateSubscriber from './serverDataStateSubscriber';
import SideMenu from './sideMenu';

interface Props {
	params: {
		stopId: string;
	};
	children: ReactNode;
}

export default async function Layout({ params: { stopId }, children }: Props) {
	const childStops = await getSiblings(stopId);
	const developmentTypes = await getDevelopmentTypes();
	const poleTypes = await getPoleTypes();

	return (
		<>
			<ChildStopRecoilRoot
				stopId={stopId}
				childStops={childStops}
				developmentTypes={developmentTypes}
				poleTypes={poleTypes}
			>
				<ServerDataStateSubscriber />
				<SideMenu>{children}</SideMenu>
			</ChildStopRecoilRoot>
		</>
	);
}
