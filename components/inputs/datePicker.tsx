import { ChangeEvent, useCallback, useState } from 'react';

interface Props {
	initDate: string;
}

export default function DatePicker({ initDate }: Props) {
	const [date, setDate] = useState<Date>(new Date(initDate));
	const onDateChange = useCallback((event: ChangeEvent) => {
		const date = (event.target as HTMLInputElement).value;
		setDate(new Date(date));
	}, []);

	return (
		<input
			type="date"
			// defaultValue={`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`}
			defaultValue={date.toISOString().split('T')[0]}
			onChange={onDateChange}
		/>
	);
}
