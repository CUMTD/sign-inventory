import { Button } from '@mui/material';
import { childStopsState, selectedChildStopState, selectedStopIdSelector } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export default function GenerateButtons() {
	console.log('generating buttons');
	const childStops: ChildStop[] = useRecoilValue(childStopsState);
	const selectedStopId = useRecoilValue(selectedStopIdSelector);
	const [selectedChildStop, setSelectedChildStop] = useRecoilState(selectedChildStopState);

	const click = useCallback(
		(id: string) => {
			const boardingPoint = parseInt(id.split(':')[1]);
			console.log('clicked ', boardingPoint);

			setSelectedChildStop(boardingPoint);
		},
		[setSelectedChildStop],
	);

	return (
		<div>
			{childStops.map(({ id, name }) => (
				<Button
					key={parseInt(id.split(':')[1])}
					variant={parseInt(id.split(':')[1]) === selectedChildStop ? 'contained' : 'outlined'}
					onClick={() => click(id)}
				>
					{/* {selectedChildStop} */}
					{name}
					{/* (:{parseInt(id.split(':')[1])}) */}
				</Button>
			))}
		</div>
	);
}
