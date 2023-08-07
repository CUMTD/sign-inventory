import { Checkbox, FormControlLabel } from '@mui/material';
import { ChangeEvent, useCallback } from 'react';

interface Props {
	value: boolean;
	label: string;
	onChange: (value: boolean) => void;
}

export default function CheckBox({ value, label, onChange }: Props) {
	const onInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const newValue = event.target.checked;
			onChange(newValue);
		},
		[onChange],
	);

	return (
		<>
			<FormControlLabel label={label} control={<Checkbox checked={value} onChange={onInputChange} />} />
		</>
	);
}
