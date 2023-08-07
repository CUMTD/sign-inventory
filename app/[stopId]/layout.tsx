'use client';

import {
	childStopsState,
	fetchChildStops,
	selectedChildStopState,
	selectedParentStopState,
} from '@state/serverDataState';
import { ReactNode } from 'react';
import { RecoilRoot, SetRecoilState } from 'recoil';
import SideMenu from './sideMenu';
import UnsavedChangesAlert from './unsavedChangesAlert';

interface Props {
	params: {
		stopId: string;
	};
	children: ReactNode;
}

export default async function Layout({ params: { stopId }, children }: Props) {
	const childStops = await fetchChildStops(stopId);

	function initializeState({ set }: { set: SetRecoilState }) {
		if (stopId !== undefined) {
			set(selectedParentStopState, stopId);
		}
		set(childStopsState, childStops);
		set(selectedChildStopState, parseInt(childStops[0].id.split(':')[1]));
	}

	return (
		<>
			<RecoilRoot initializeState={initializeState}>
				{/* <UnsavedChangesAlert /> */}
				<SideMenu>{children}</SideMenu>
			</RecoilRoot>
		</>
	);
}
