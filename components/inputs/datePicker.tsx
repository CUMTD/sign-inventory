import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ChangeEvent, ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface CustomDatePickerProps {
	label: string;
}

type ValueSelectorFunction = (data: ChildStop) => Date;
type UpdateFunction = (currentData: ChildStop, newValue: Date) => ChildStop;

export function createDatePicker(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction) {
	return function CustomDatePicker({ label }: CustomDatePickerProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);

		function onChange(event: ChangeEvent<HTMLInputElement>): void {
			if (data !== null) {
				const newValue = new Date(event.target.value);
				const newChildStopData = updateFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		let value = new Date(valueSelector(data)).toISOString().split('T')[0];
		return <input type="date" value={value === '0001-01-01' ? '' : value} onChange={onChange} />;
	};
}
