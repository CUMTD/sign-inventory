import { Slider, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import SliderDescription from './sliderDescription';

interface Props {
	min: number;
	max: number;
	defaultValue: number;
	description_set: string;
}

export default function HorizSlider({ min, max, defaultValue, description_set }: Props) {
	const [value, setValue] = useState<number>(defaultValue);

	const onInputChange = useCallback((event: Event) => {
		const value = parseInt((event.target as HTMLInputElement).value);
		setValue(value);
	}, []);

	return (
		<>
			<Typography variant="subtitle2">
				{value} : <SliderDescription value={value} description_set={description_set} />
			</Typography>
			<Slider value={value} min={min} max={max} marks valueLabelDisplay="off" onChange={onInputChange} />
		</>
	);
}
