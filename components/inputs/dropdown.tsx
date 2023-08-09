import { Select, MenuItem, Typography, SelectChangeEvent } from '@mui/material';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ChangeEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
	selection: number;
	label: string;
	options: string[];
	onChange: (value: SelectChangeEvent<number>) => void;
}
const dev_types = ['Unknown', 'Campus', 'Commercial', 'Residential', 'Other'];
const pole_types = ['Unknown', 'MTD Pole', 'Stop Sign', 'Street Light', 'Traffic Light', 'Utility Pole', 'Other Pole'];

export default function DropDown({ selection, label, options, onChange }: Props) {
	// const [value, setValue] = useState<number>(0);

	const menuItems = options.map((option, index) => {
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
			<Select value={selection} onChange={onChange}>
				{menuItems}
			</Select>
		</>
	);
}

interface CustomDropDownProps {
	label: string;
	options: 'development_types' | 'pole_types';
}

type ValueSelectorFunction = (data: ChildStop) => string;
type UpdateFunction = (currentData: ChildStop, newValue: string) => ChildStop;

// TODO: also need to update the "order" and "id" fields
export function createDropDown(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction) {
	return function CustomCheckbox({ label, options }: CustomDropDownProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);
		var selectionOptions: string[] = [];

		if (options === 'development_types') {
			selectionOptions = dev_types;
		} else if (options === 'pole_types') {
			selectionOptions = pole_types;
		} else {
			selectionOptions = [];
		}
		function onChange(event: SelectChangeEvent<number>): void {
			if (data !== null) {
				const newValue: string = selectionOptions[event.target.value as number];

				const newChildStopData = updateFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		let value: string = valueSelector(data) ?? 'Unknown';

		if (value === 'Comercial') {
			value = 'Commercial';
		}

		// console.log('value', type(value));
		return (
			<DropDown
				selection={selectionOptions.indexOf(value)}
				label={label}
				options={selectionOptions}
				onChange={onChange}
			/>
		);
	};
}
