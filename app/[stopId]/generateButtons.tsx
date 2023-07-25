import { Button } from '@mui/material';
import { childStopsState, selectedChildStopState, selectedStopIdSelector } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function GenerateButtons() {
	const childStops: ChildStop[] = useRecoilValue(childStopsState);
	const selectedStopId = useRecoilValue(selectedStopIdSelector);
	const setSelectedBoardingPoint = useSetRecoilState(selectedChildStopState);

	const click = useCallback((id: string) => {
		const boardingPoint = parseInt(id.split(':')[1]);
		setSelectedBoardingPoint(boardingPoint);
	}, [setSelectedBoardingPoint]);


	return (
		<div>
			{childStops.map(({ id, name }) => (
				<Button
					key={id}
					variant={id === selectedStopId ? 'contained' : 'outlined'}
					onClick={() => click(id)}
				>
					{name}
				</Button>
			))}
		</div>
	);
}
