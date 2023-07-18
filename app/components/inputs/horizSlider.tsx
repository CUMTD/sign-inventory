import { Slider } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';

interface Props {
	min: number;
	max: number;
}

export default function HorizSlider({ min, max }: Props) {
	const [value, setValue] = useState<number>(Math.floor(max / 2));

	const onInputChange = useCallback((event: Event) => {
		const value = parseInt((event.target as HTMLInputElement).value);
		setValue(value);
	}, []);

	return (
		<>
			<Slider defaultValue={3} min={min} max={max} marks valueLabelDisplay="on" onChange={onInputChange} />
		</>
	);
}
