import { TextField } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';

interface Props {
	initFeet: number;
	initInches: number;
}

export default function FeetInches({ initFeet, initInches }: Props) {
	return (
		<>
			<TextField
				label="Feet"
				type="number"
				defaultValue={0}
				value={initFeet}
				// onChange={onFeetChange}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				label="Inches"
				type="number"
				defaultValue={0}
				value={initInches}
				// onChange={oninchesChange}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</>
	);
}
