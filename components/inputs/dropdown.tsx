import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
	selection: number;
	label: string;
	options: string[];
	onChange: (value: SelectChangeEvent<number>) => void;
}

interface CustomDropDownProps {
	label: string;
}

type ValueSelectorFunction = (data: ChildStop) => string;
type UpdateFunction = (currentData: ChildStop, newId: string) => ChildStop;

export function createDropDown(
	defaultId: string,
	options: { [key: string]: string },
	valueSelector: ValueSelectorFunction,
	updateFunction: UpdateFunction,
) {
	return function CustomCheckbox({ label }: CustomDropDownProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);

		const selectionOptionsKeys = Object.keys(options);

		function onChange(event: SelectChangeEvent<number>): void {
			if (data !== null) {
				const newValue: string = selectionOptionsKeys[event.target.value as number];

				const newChildStopData = updateFunction(data, newValue);

				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		let value: string = valueSelector(data) ?? defaultId;
		return (
			<DropDown
				selection={selectionOptionsKeys.indexOf(value)}
				label={label}
				options={Object.values(options)}
				onChange={onChange}
			/>
		);
	};
}

export default function DropDown({ selection, label, options, onChange }: Props) {
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
