'use client';

import TextInput from '@components/inputs/textInput';
import { printTextInput } from '@helpers/placeholderPrinters';

export default function NotesPage() {
	return <TextInput label="Notes" placeholder="This is certainly a bus stop." onChange={printTextInput}></TextInput>;
}
