import { Select, MenuItem, Typography, SelectChangeEvent } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

interface Props {
	label: string;
	options: 'development_types' | 'pole_types';
	onChange: (value: number) => void;
}

export default function DropDown({ label, options, onChange }: Props) {
	const [value, setValue] = useState<number>(0);

	// useEffect(() => {
	// 	onChange(value);
	// }, [value]);

	const onInputChange = useCallback((event: SelectChangeEvent<number>) => {
		const value = (event.target as HTMLInputElement).value;
		setValue(parseInt(value));
	}, []);

	var selectionOptions: string[] = [];
	if (options === 'development_types') {
		selectionOptions = process.env.NEXT_PUBLIC_DEVELOPMENT_TYPES?.split(',') ?? [];
	} else if (options === 'pole_types') {
		selectionOptions = process.env.NEXT_PUBLIC_POLE_TYPES?.split(',') ?? [];
	} else {
		selectionOptions = options;
	}

	const menuItems = selectionOptions.map((option, index) => {
		return (
			<MenuItem key={index} value={index}>
				{option}
			</MenuItem>
		);
	});

	return (
		<>
			<Typography variant="h6" component="h3">
				{label}
			</Typography>
			<Select defaultValue={0} onChange={onInputChange}>
				{menuItems}
			</Select>
		</>
	);
}
