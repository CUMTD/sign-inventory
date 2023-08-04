import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

interface Props {
	label: string;
	placeholder: number;
	onChange: (value: number) => void;
}

export default function NumberInput({ label, placeholder, onChange }: Props) {
	const [value, setValue] = useState<number>(0);

	useEffect(() => {
		onChange(value);
	}, [value, onChange]);

	const onInputChange = useCallback((event: ChangeEvent) => {
		const value = (event.target as HTMLInputElement).value;
		setValue(parseInt(value));
	}, []);

	return (
		<>
			<Typography variant="h6" component="h3">
				{label}
			</Typography>
			<TextField
				id="outlined-number"
				defaultValue={placeholder}
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				onChange={onInputChange}
			/>
		</>
	);
}
