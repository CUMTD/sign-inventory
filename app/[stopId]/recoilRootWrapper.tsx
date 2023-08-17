// import { MutableSnapshot, RecoilRoot, SetRecoilState } from 'recoil';
// import ServerDataStateSubscriber from './serverDataStateSubscriber';
// import SideMenu from './sideMenu';
// import { fetchChildStops } from '@helpers/fetchDataHelpers';
// import { childStopsState, selectedChildStopState, selectedParentStopState } from '@state/serverDataState';
// import { ReactNode } from 'react';

// interface Props {
// 	stopId: string;
// 	children: ReactNode;
// }

// export default async function RecoilRootWrapper({ stopId, children }: Props) {
// 	console.log('called');
// 	const childStops = await fetchChildStops(stopId);

// 	function initializeState({ set }: { set: SetRecoilState }) {
// 		if (stopId !== undefined) {
// 			set(selectedParentStopState, stopId);
// 		}
// 		set(childStopsState, childStops);
// 		set(selectedChildStopState, parseInt(childStops[0].id.split(':')[1]));
// 	}

// 	return (
// 		<RecoilRoot initializeState={initializeState}>
// 			<ServerDataStateSubscriber />
// 			<SideMenu>{children}</SideMenu>
// 		</RecoilRoot>
// 	);
// }
