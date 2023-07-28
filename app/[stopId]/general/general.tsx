'use client';
import CheckBox from '@components/inputs/checkbox';
import DropDown from '@components/inputs/dropdown';
import { printCheckBox, printDropDown } from '@helpers/placeholderPrinters';
import styles from '../page.module.css';

export default function GeneralPage() {
	return (
		<div className={styles.tabpage}>
			<div className={styles.subSection}>
				<DropDown label="Development Type" options="development_types" onChange={printDropDown} />
				<CheckBox label="Has street light" value={true} onChange={printCheckBox} />
			</div>
		</div>
	);
}
