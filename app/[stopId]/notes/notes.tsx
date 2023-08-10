'use client';

import { createTextInput } from '@components/inputs/textInput';

const StopNotesTextInput = createTextInput(
	({ notes }) => notes,
	(data, newValue) => ({
		...data,
		notes: newValue,
	}),
);
export default function NotesPage() {
	return (
		<div style={{ marginBottom: '2em' }}>
			<StopNotesTextInput label="Notes" placeholder="This is certainly a bus stop." />
		</div>
	);
}
