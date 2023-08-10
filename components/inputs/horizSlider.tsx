import { Checkbox, Slider, Typography } from '@mui/material';
import { ChangeEvent, ReactNode, useCallback, useState } from 'react';
import SliderDescription from './sliderDescription';
import { ChildStop } from '@t/apiResponse';
import { useRecoilState } from 'recoil';
import { modifiedDataState } from '@state/serverDataState';

// interface Props {
// 	min: number;
// 	max: number;
// 	defaultValue: number;
// 	description_set: string;
// }

// export default function HorizSlider({ min, max, defaultValue, description_set }: Props) {
// 	const [value, setValue] = useState<number>(defaultValue);

// 	const onInputChange = useCallback((event: Event) => {
// 		const value = parseInt((event.target as HTMLInputElement).value);
// 		setValue(value);
// 	}, []);

// 	return (
// 		<>
// 			<Typography variant="subtitle2">
// 				{defaultValue} : <SliderDescription value={defaultValue} description_set={description_set} />
// 			</Typography>
// 			<Slider value={defaultValue} min={min} max={max} marks valueLabelDisplay="off" onChange={onInputChange} />
// 		</>
// 	);
// }

interface CustomHorizSliderProps {
	label: string;
	min: number;
	max: number;
	description_set: string;
}

const ease_of_access_marks = [
	{
		value: 1,
		label: 'Not Accessible',
	},
	{
		value: 3,
		label: 'Somewhat Accessible',
	},
	{
		value: 5,
		label: 'Easily Accessible',
	},
];

const ease_of_boarding_marks = [
	{
		value: 1,
		label: 'Difficult',
	},
	{
		value: 3,
		label: 'Reasonable',
	},
	{
		value: 5,
		label: 'Easy',
	},
];

const tilt_angle_marks = [
	{
		value: 1,
		label: 'Extremely tilted',
	},
	{
		value: 3,
		label: 'Moderately tilted',
	},
	{
		value: 5,
		label: 'Plumb (not tilted)',
	},
];

function marks(description_set: string) {
	if (description_set === 'ease_of_access') {
		return ease_of_access_marks;
	}
	if (description_set === 'ease_of_boarding') {
		return ease_of_boarding_marks;
	}
	if (description_set === 'tilt_angle') {
		return tilt_angle_marks;
	}
}

type ValueSelectorFunction = (data: ChildStop) => number;
type UpdateFunction = (currentData: ChildStop, newValue: number) => ChildStop;

export function createHorizSlider(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction) {
	return function CustomHorizSlider({ label, min, max, description_set }: CustomHorizSliderProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);

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
		return (
			<>
				<Typography variant="h6" component="h3">
					{label}
				</Typography>
				<Slider
					value={value}
					min={min}
					max={max}
					marks={marks(description_set)}
					valueLabelDisplay="off"
					onChange={onChange}
					sx={{ marginLeft: '3em', marginBottom: '2em' }}
				/>{' '}
				<Typography variant="subtitle2" sx={{ minHeight: '5em', marginBottom: '0px !important' }}>
					{value} : <SliderDescription value={value} description_set={description_set} />
				</Typography>
			</>
		);
	};
}
