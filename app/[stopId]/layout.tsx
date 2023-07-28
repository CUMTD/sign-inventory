'use client';

import {
	childStopsState,
	fetchChildStops,
	selectedChildStopState,
	selectedParentStopState,
} from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ReactNode, useEffect } from 'react';
import { RecoilRoot, SetRecoilState } from 'recoil';
import SideMenu from './sideMenu';
import UnsavedChangesAlert from './unsavedChangesAlert';
import ChildStopUpdater from './childStopUpdater';

interface Props {
	params: {
		stopId: string;
	};
	children: ReactNode;
}

export default async function Layout({ params: { stopId }, children }: Props) {
	// console.log('urlStopId', stopId);
	const childStops = await fetchChildStops(stopId);

	function initializeState({ set }: { set: SetRecoilState }) {
		console.log('initializing state');
		set(selectedParentStopState, stopId);

		set(childStopsState, childStops);
		// set(selectedChildStopState, parseInt(childStops[0].id.split(':')[1]));
	}

	return (
		<>
			<RecoilRoot initializeState={initializeState}>
				<ChildStopUpdater />
				{/* <UnsavedChangesAlert /> */}
				<SideMenu>{children}</SideMenu>
			</RecoilRoot>
		</>
	);
}
