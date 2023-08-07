import { Select, MenuItem, Typography, SelectChangeEvent } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

interface Props {
	selection: string;
	label: string;
	options: 'development_types' | 'pole_types';
	onChange: (value: number) => void;
}
const dev_types = ['Unknown', 'Campus', 'Commercial', 'Residential', 'Other'];
const pole_types = ['Unknown', 'MTD Pole', 'Stop Sign', 'Street Light', 'Traffic Light', 'Utility Pole', 'Other Pole'];

export default function DropDown({ selection, label, options, onChange }: Props) {
	const [value, setValue] = useState<number>(0);
	if (selection === 'Comercial') {
		selection = 'Commercial';
	}

	const onInputChange = useCallback((event: SelectChangeEvent<number>) => {
		const value = (event.target as HTMLInputElement).value;
		setValue(parseInt(value));
	}, []);

	var selectionOptions: string[] = [];

	if (options === 'development_types') {
		selectionOptions = dev_types;
	} else if (options === 'pole_types') {
		selectionOptions = pole_types;
	} else {
		selectionOptions = [];
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
			<Select value={selectionOptions.indexOf(selection)} onChange={onInputChange}>
				{menuItems}
			</Select>
		</>
	);
}
