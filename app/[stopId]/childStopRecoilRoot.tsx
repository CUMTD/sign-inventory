'use client';

import { selectedParentStopState, childStopsState, selectedChildStopState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ReactNode } from 'react';
import { RecoilRoot, SetRecoilState } from 'recoil';
import { notFound } from 'next/navigation';

import 'client-only';

interface Props {
	stopId: string;
	childStops: ChildStop[];
	children: ReactNode;
}

export default function ChildStopRecoilRoot({ stopId, childStops, children }: Props) {
	if (childStops.length === 0) {
		return notFound();
	}
	function initializeState({ set }: { set: SetRecoilState }) {
		if (stopId !== undefined) {
			set(selectedParentStopState, stopId);
		}
		set(childStopsState, childStops);
		set(selectedChildStopState, parseInt(childStops[0].id.split(':')[1]));
	}

	return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
}
