import { Button } from '@mui/material';
import { childStopsState, isBlinkWarningState, isDataModifiedSelector, selectedChildStopState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

// generate the child stop buttons on the sidebar
export default function GenerateButtons() {
	const isDataModified = useRecoilValue(isDataModifiedSelector);

	const childStops: ChildStop[] = useRecoilValue(childStopsState);
	const [selectedChildStop, setSelectedChildStop] = useRecoilState(selectedChildStopState);
	const setIsBlinkWarningState = useSetRecoilState(isBlinkWarningState);

	// set the selected child stop atom on button click
	const click = useCallback(
		(id: string) => {
			if (isDataModified) {
				setIsBlinkWarningState(true);
			} else {
				const boardingPoint = parseInt(id.split(':')[1]);
				setSelectedChildStop(boardingPoint);
			}
		},
		[isDataModified, setIsBlinkWarningState, setSelectedChildStop],
	);

	// logic for rendering button fills
	return (
		<div>
			{childStops.map(({ id, name }) => (
				<Button
					key={parseInt(id.split(':')[1])}
					variant={parseInt(id.split(':')[1]) === selectedChildStop ? 'contained' : 'outlined'}
					onClick={() => click(id)}
				>
					{name}
				</Button>
			))}
		</div>
	);
}

