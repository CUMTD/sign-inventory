import { selectedChildStopState, childStopsState, selectedParentStopState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export default async function ChildStopUpdater() {
	const [selectedChildStop, setSelectedChildStop] = useRecoilState(selectedChildStopState);
	const childStops = useRecoilValue(childStopsState);

	console.log('childStops', childStops);
	useEffect(() => {
		const first = parseInt(childStops[0]?.id.split(':')[1]);
		if (first === 0) {
			setSelectedChildStop(first);
		}
	}, [childStops, selectedChildStop, setSelectedChildStop]);

	return null;
}
