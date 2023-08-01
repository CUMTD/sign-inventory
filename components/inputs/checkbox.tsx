import { Checkbox, FormControlLabel } from '@mui/material';
import { ChangeEvent, useCallback } from 'react';

interface Props {
	value: boolean;
	label: string;
	onChange: (value: boolean) => void;
}

export default function CheckBox({ value, label, onChange }: Props) {
	const onInputChange = useCallback(
		(event: ChangeEvent) => {
			const newValue = (event.target as HTMLInputElement).checked;
			onChange(newValue);
		},
		[onChange],
	);

	return (
		<>
			<FormControlLabel label={label} control={<Checkbox checked={value} onChange={onInputChange} />} />
		</>
	);
}

/* interface Props<TModel> {
	label: string;
	model: RecoilState<TModel>;
}

export default function generateCheckBox<TModel>(
	valueSelector: (state: TModel) => boolean,
	setterSelector: (setter: SetterOrUpdater<TModel>) => (value: boolean, current: TModel) => void
) {
	return function ModelCheckbox({ label, model }: Props<TModel>) {
		const [state, setState] = useRecoilState(model);
		const value = valueSelector(state);
		const setter = setterSelector(setState);

		const onInputChange = useCallback(
			(event: ChangeEvent) => {
				const newValue = (event.target as HTMLInputElement).checked;
				setter(newValue, state);
			},
			[state]
		);

		return <FormControlLabel value={value} label={label} control={<Checkbox onChange={onInputChange} />} />;
	};
} */
