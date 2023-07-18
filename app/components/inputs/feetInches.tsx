import { TextField, Typography } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';

export default function FeetInches() {
	const [feet, setFeet] = useState<number>(0);
	const [inches, setInches] = useState<number>(0);

	const onFeetChange = useCallback((event: ChangeEvent) => {
		const value = parseInt((event.target as HTMLInputElement).value);
		setFeet(value);
		console.log(value);
	}, []);

	const oninchesChange = useCallback((event: ChangeEvent) => {
		const value = parseInt((event.target as HTMLInputElement).value);
		setInches(value);
		console.log(value);
	}, []);

	return (
		<>
			<TextField
				label="Feet"
				type="number"
				defaultValue={feet}
				onChange={onFeetChange}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				label="Inches"
				type="number"
				defaultValue={inches}
				onChange={oninchesChange}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</>
	);
}
