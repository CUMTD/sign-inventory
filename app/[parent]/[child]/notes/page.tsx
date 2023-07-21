'use client';

import TextInput from '@components/inputs/textInput';
import { printTextInput } from '@helpers/placeholderPrinters';

interface Props {
	params: {
		parent: string;
		child: string;
	};
}

export default function Page({ params: { parent, child } }: Props) {
	return <TextInput label="Notes" placeholder="This is certainly a bus stop." onChange={printTextInput}></TextInput>;
}
