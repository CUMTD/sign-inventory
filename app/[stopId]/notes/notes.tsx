'use client';

import TextInput, { createTextInput } from '@components/inputs/textInput';
import { printTextInput } from '@helpers/placeholderPrinters';
import { selectedChildStopSelector } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';

const StopNotesTextInput = createTextInput(
	({ notes }) => notes,
	(data, newValue) => ({
		...data,
		notes: newValue,
	}),
);
export default function NotesPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);

	return (
		<div style={{ marginBottom: '2em' }}>
			<StopNotesTextInput label="Notes" placeholder="This is certainly a bus stop." />
		</div>
	);
}
