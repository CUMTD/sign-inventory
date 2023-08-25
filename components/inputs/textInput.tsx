import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { ChangeEvent, ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface CustomTextInputProps {
	label: string;
	placeholder: string;
}

type ValueSelectorFunction = (data: ChildStop) => string;
type UpdateFunction = (currentData: ChildStop, newValue: string) => ChildStop;

export function createTextInput(valueSelector: ValueSelectorFunction, updateFunction: UpdateFunction) {
	return function CustomTextInput({ label, placeholder }: CustomTextInputProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);

		function onChange(event: ChangeEvent<HTMLInputElement>): void {
			if (data) {
				const newValue = event.target.value;
				const newChildStopData = updateFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		const value = valueSelector(data);

		//TODO: Remove Inline Styles
		return (
			<>
				<Typography variant="h6" component="h3">
					{label}
				</Typography>
				<TextField
					placeholder={placeholder}
					multiline
					rows={4}
					value={value}
					InputLabelProps={{
						shrink: true,
					}}
					onChange={onChange}
					style={{ width: '100%' }}
				/>
			</>
		);
	};
}
