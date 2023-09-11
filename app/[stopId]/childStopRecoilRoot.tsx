'use client';

import {
	selectedParentStopState,
	childStopsState,
	selectedChildStopState,
	developmentTypesState,
	poleTypesState,
} from '@state/serverDataState';
import { ChildStop, DevelopmentType, PoleType } from '@t/apiResponse';
import { ReactNode } from 'react';
import { RecoilRoot, SetRecoilState } from 'recoil';
import { notFound } from 'next/navigation';

import 'client-only';

interface Props {
	stopId: string;
	childStops: ChildStop[];
	developmentTypes: DevelopmentType[];
	poleTypes: PoleType[];
	children: ReactNode;
}

export default function ChildStopRecoilRoot({ stopId, childStops, developmentTypes, poleTypes, children }: Props) {
	if (childStops.length === 0) {
		return notFound();
	}
	function initializeState({ set }: { set: SetRecoilState }) {
		if (stopId !== undefined) {
			set(selectedParentStopState, stopId);
		}
		set(childStopsState, childStops);
		set(selectedChildStopState, parseInt(childStops[0].id.split(':')[1]));
		set(developmentTypesState, developmentTypes);
		set(poleTypesState, poleTypes);
	}

	return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
}
