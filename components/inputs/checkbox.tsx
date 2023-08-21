import { Checkbox, FormControlLabel } from '@mui/material';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ChangeEvent, ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface CustomCheckBoxProps {
	label: string;
}

type ValueSelectorFunction = (data: ChildStop) => boolean;
type UpdateFunction = (currentData: ChildStop, newValue: boolean) => ChildStop;

export function createCheckbox(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction) {
	return function CustomCheckbox({ label }: CustomCheckBoxProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);

		function onChange(event: ChangeEvent<HTMLInputElement>): void {
			if (data !== null) {
				const newValue = event.target.checked;
				const newChildStopData = updateFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		const value = valueSelector(data);
		return <FormControlLabel label={label} control={<Checkbox checked={value} onChange={onChange} />} />;
	};
}
