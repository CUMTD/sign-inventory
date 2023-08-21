'use client';

import { createTextInput } from '@components/inputs/textInput';

const StopNotesTextInput = createTextInput(
	({ notes }) => {
		if (notes) {
			return notes;
		} else {
			return '';
		}
	},
	(data, newValue) => ({
		...data,
		notes: newValue,
	}),
);

// TODO: inline css is bad
export default function NotesPage() {
	return (
		<div style={{ marginBottom: '2em' }}>
			<StopNotesTextInput label="Notes" placeholder="This is certainly a bus stop." />
		</div>
	);
}
