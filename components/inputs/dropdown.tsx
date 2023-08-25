import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

// TODO: Remove Hard Coded Values
// create development type endpoint that fetches key values for dev types
// call in layout or higher level server only page and find some way to pass it to this component (prop, recoil state)
interface Props {
	selection: number;
	label: string;
	options: string[];
	onChange: (value: SelectChangeEvent<number>) => void;
}

// load these from api
export const development_types: { [name: string]: string } = {
	'03d55322f3e84d648a51dc1ff863ae9c': 'Other',
	'18ee4035a14744bdb17a98fc680dfb49': 'Campus',
	'727dc560279e469d97f7f79683935981': 'Unknown',
	'8bc671cad47b4a359500b5b50d218077': 'Comercial',
	'e434fddfd2e54fff8c3b18a6db25c155': 'Commercial',
	'f8c640f8e1ba4bdfb5a48da767e4666b': 'Residential',
};

export const pole_types: { [name: string]: string } = {
	'01172fef5de04fc2bfa13fd31f04c83d': 'Utility Pole',
	'100a1556752640c3b263353053341dd2': 'Other Pole',
	'832cd03d62864fe58a5fc871070a1b2b': 'MTD Pole',
	'9601eb200ce1423a9ebeb7b4cc0ae6e6': 'Unknown',
	'cd070ca005614c94bbfc73b6fe481b23': 'Traffic Light',
	'ebf90fa1f7f942b4b4633919da2e65d0': 'Street Light',
	'fb33193238684d97983d3886f2627ae8': 'Stop Sign',
};

interface CustomDropDownProps {
	label: string;
	options: 'development_types' | 'pole_types';
}

type ValueSelectorFunction = (data: ChildStop) => string;
type UpdateFunction = (currentData: ChildStop, newId: string) => ChildStop;

export function createDropDown(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction) {
	return function CustomCheckbox({ label, options }: CustomDropDownProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);
		var selectionOptions = {};

		if (options === 'development_types') {
			selectionOptions = development_types;
		} else if (options === 'pole_types') {
			selectionOptions = pole_types;
		}

		const selectionOptionsKeys = Object.keys(selectionOptions);

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

		let value: string = valueSelector(data) ?? '727dc560279e469d97f7f79683935981';

		// TODO: fix on db side
		if (value === '8bc671cad47b4a359500b5b50d218077') {
			value = 'e434fddfd2e54fff8c3b18a6db25c155';
		}

		return (
			<DropDown
				selection={selectionOptionsKeys.indexOf(value)}
				label={label}
				options={Object.values(selectionOptions)}
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
