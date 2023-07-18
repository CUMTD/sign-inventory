import { ChangeEvent, useCallback, useState } from 'react';

export default function DatePicker() {
	const [date, setDate] = useState<Date>(new Date());

	const onDateChange = useCallback((event: ChangeEvent) => {
		const date = (event.target as HTMLInputElement).value;
		setDate(new Date(date));
		console.log(date);
	}, []);

	return <input type="date" onChange={onDateChange} />;
}
