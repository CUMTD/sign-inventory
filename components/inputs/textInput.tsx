import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

interface Props {
	label: string;
	placeholder: string;
	onChange: (value: string) => void;
	defaultValue: string;
}

export default function TextInput({ label, placeholder, onChange, defaultValue }: Props) {
	const [value, setValue] = useState<string>('');

	// useEffect(() => {
	// 	onChange(value);
	// }, [value, onChange]);

	// const onInputChange = useCallback((event: ChangeEvent) => {
	// 	const value = (event.target as HTMLInputElement).value;
	// 	setValue(value);
	// }, []);
	if (defaultValue === null) {
		defaultValue = '';
	}

	return (
		<>
			<Typography variant="h6" component="h3">
				{label}
			</Typography>
			<TextField
				placeholder={placeholder}
				multiline
				rows={4}
				value={defaultValue}
				InputLabelProps={{
					shrink: true,
				}}
				// onChange={onInputChange}
				style={{ width: '100%' }}
			/>
		</>
	);
}
