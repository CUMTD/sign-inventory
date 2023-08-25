import { TextField, Typography } from '@mui/material';
import { modifiedDataState } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import styles from 'app/[stopId]/page.module.css';
import { ChangeEvent, ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface CustomFeetInchesProps {
	label: string;
}

type FeetValueSelectorFunction = (data: ChildStop) => number;
type InchesValueSelector = (data: ChildStop) => number;

type UpdateFeetFunction = (currentData: ChildStop, newFeet: number) => ChildStop;
type UpdateInches = (currentData: ChildStop, newInches: number) => ChildStop;

export function createFeetInches(
	feetValueSelector: FeetValueSelectorFunction,
	inchesValueSelector: InchesValueSelector,
	updateFeetFunction: UpdateFeetFunction,
	updateInchesFunction: UpdateInches,
) {
	return function CustomFeetInches({ label }: CustomFeetInchesProps): ReactNode {
		const [data, setData] = useRecoilState(modifiedDataState);

		function onFeetChange(event: ChangeEvent<HTMLInputElement>): void {
			if (data !== null) {
				const newValue = event.target.valueAsNumber;
				const newChildStopData = updateFeetFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		function onInchesChange(event: ChangeEvent<HTMLInputElement>): void {
			if (data !== null) {
				const newValue = event.target.valueAsNumber;
				const newChildStopData = updateInchesFunction(data, newValue);
				setData(newChildStopData);
			}
		}

		if (data === null) {
			return null;
		}

		const feet = feetValueSelector(data);
		const inches = inchesValueSelector(data);

		return (
			<>
				<Typography variant="h6" component="h3">
					{label}
				</Typography>
				<div className={styles.footInchInput}>
					<TextField
						label="Feet"
						type="number"
						value={feet}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={onFeetChange}
					/>
					<TextField
						label="Inches"
						type="number"
						value={inches}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={onInchesChange}
					/>
				</div>
			</>
		);
	};
}
