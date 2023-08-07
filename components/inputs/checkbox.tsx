import { Checkbox, FormControlLabel } from '@mui/material';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';

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

	return <FormControlLabel label={label} control={<Checkbox checked={value} onChange={onInputChange} />} />;
}

interface CustomCheckboxProps {
	label: string;
}

export function createCheckbox(valueSelector: (data: ChildStop) => boolean, updateFunction: (value: boolean) => Partial<ChildStop>) {
	return function CustomCheckbox({ label }: CustomCheckboxProps) {
		const [data, setData] = useRecoilState(modifiedDataState);
		const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
			if (data) {
				const newValue = event.target.checked;
				setData({
					...data,
					...updateFunction(newValue)
				});
			}
		}, [data, setData]);


		if (data === null) {
			return null;
		}

		const value = valueSelector(data);
		return <FormControlLabel label={label} control={<Checkbox checked={value} onChange={onChange} />} />;
	}
}
