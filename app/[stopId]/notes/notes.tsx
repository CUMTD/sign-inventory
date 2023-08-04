'use client';

import TextInput from '@components/inputs/textInput';
import { printTextInput } from '@helpers/placeholderPrinters';
import { selectedChildStopSelector } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';

export default function NotesPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);

	return (
		<TextInput
			defaultValue={stop.notes}
			label="Notes"
			placeholder="This is certainly a bus stop."
			onChange={printTextInput}
		></TextInput>
	);
}
