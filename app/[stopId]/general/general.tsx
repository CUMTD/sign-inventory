'use client';
import CheckBox from '@components/inputs/checkbox';
import DropDown from '@components/inputs/dropdown';
import { printCheckBox, printDropDown } from '@helpers/placeholderPrinters';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';

export default function GeneralPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);

	console.log('light?', stop.hasStreetLight);

	return (
		<div className={styles.tabpage}>
			<div className={styles.subSection}>
				<DropDown
					selection={stop.developmentType?.name ?? 'Unknown'}
					label="Development Type"
					options="development_types"
					onChange={printDropDown}
				/>
				<CheckBox label="Has street light" value={stop.hasStreetLight} onChange={printCheckBox} />
			</div>
		</div>
	);
}
