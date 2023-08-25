'use client';

import { createTextInput } from '@components/inputs/textInput';
import styles from './notes.module.css';

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

export default function NotesPage() {
	return (
		<div className={styles.notesContainer}>
			<StopNotesTextInput label="Notes" placeholder="This is certainly a bus stop." />
		</div>
	);
}
