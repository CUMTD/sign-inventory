import sliderDescriptions from '@consts/sliderDescriptions';
import sliderMarks from '@consts/sliderMarks';
import { Slider, Typography } from '@mui/material';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import SliderSet from '@t/sliderSet';
import { ReactNode, useMemo } from 'react';
import { useRecoilState } from 'recoil';

interface CustomHorizSliderProps {
	label: string;
}

type ValueSelectorFunction = (data: ChildStop) => number;
type UpdateFunction = (currentData: ChildStop, newValue: number) => ChildStop;

export function createHorizSlider(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction, sliderSet: SliderSet) {
	return function CustomHorizSlider({ label }: CustomHorizSliderProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);
		const descriptions = useMemo(() => sliderDescriptions[sliderSet], []);
		const marks = useMemo(() => sliderMarks[sliderSet], []);
		const min = useMemo(() => {
			if (!data || valueSelector(data) === 0) {
				return 0;
			}
			return 1;
		}, [data]);
		const max = useMemo(() => {
			if (descriptions) {
				return descriptions.length - 1;
			}
			return 0;
		}, [descriptions]);


		function onChange(event: Event): void {
			if (data !== null) {
				const newValue = parseInt((event.target as HTMLInputElement).value);
				const newChildStopData = updateFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		const value = valueSelector(data);
		const descriptionsText = descriptions ? descriptions[value] : '';

		// TODO: remove inline style
		return (
			<>
				<Typography variant="h6" component="h3">
					{label}
				</Typography>
				<Slider
					value={value}
					min={min}
					max={max}
					marks={marks}
					valueLabelDisplay="off"
					onChange={onChange}
					sx={{ marginLeft: '3em' }}
				/>
				<Typography variant="subtitle2">
					{value} : {descriptionsText}
				</Typography>
			</>
		);
	};
}
