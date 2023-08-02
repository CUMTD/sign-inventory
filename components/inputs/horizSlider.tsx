import { Slider, Typography } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import SliderDescription from './sliderDescription';

interface Props {
	min: number;
	max: number;
	defaultValue: number;
}

export default function HorizSlider({ min, max, defaultValue }: Props) {
	const [value, setValue] = useState<number>(defaultValue);

	const onInputChange = useCallback((event: Event) => {
		const value = parseInt((event.target as HTMLInputElement).value);
		setValue(value);
	}, []);

	return (
		<>
			<Typography variant="subtitle2">
				{value} : <SliderDescription value={value} description_set={'tilt_angle'} />
			</Typography>
			<Slider value={value} min={min} max={max} marks valueLabelDisplay="off" onChange={onInputChange} />
		</>
	);
}
