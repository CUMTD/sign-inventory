import { fetchChildStops } from '@helpers/fetchDataHelpers';
import { childStopsState, selectedChildStopState, selectedParentStopState } from '@state/serverDataState';
import { ReactNode } from 'react';
import { RecoilRoot, SetRecoilState } from 'recoil';
import ServerDataStateSubscriber from './serverDataStateSubscriber';
import SideMenu from './sideMenu';
import ChildStopRecoilRoot from './childStopRecoilRoot';
import 'server-only';

interface Props {
	params: {
		stopId: string;
	};
	children: ReactNode;
}

// causes infinite loop of rerenders
export default async function Layout({ params: { stopId }, children }: Props) {
	const childStops = await fetchChildStops(stopId);

	return (
		<>
			<ChildStopRecoilRoot stopId={stopId} childStops={childStops}>
				<ServerDataStateSubscriber />
				<SideMenu>{children}</SideMenu>
			</ChildStopRecoilRoot>
		</>
	);
}
