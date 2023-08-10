import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ChangeEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface CustomNumberInputProps {
	label: string;
}

type ValueSelectorFunction = (data: ChildStop) => number;
type UpdateFunction = (currentData: ChildStop, newValue: number) => ChildStop;

export function createNumberInput(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction) {
	return function CustomNumberInput({ label }: CustomNumberInputProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);

		function onChange(event: ChangeEvent<HTMLInputElement>): void {
			if (data !== null) {
				const newValue = event.target.valueAsNumber;
				const newChildStopData = updateFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		const value = valueSelector(data);

		return (
			<>
				<Typography variant="h6" component="h3">
					{label}
				</Typography>
				<TextField
					id="outlined-number"
					value={value}
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					onChange={onChange}
				/>
			</>
		);
	};
}
