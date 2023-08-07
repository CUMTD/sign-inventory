'use client';
import { createCheckbox } from '@components/inputs/checkbox';
import DropDown from '@components/inputs/dropdown';
import { printDropDown } from '@helpers/placeholderPrinters';
import { modifiedDataState } from '@state/serverDataState';
import { useRecoilState } from 'recoil';
import styles from '../page.module.css';

const CustomCheckbox = createCheckbox(
	({ hasStreetLight }) => hasStreetLight,
	(value) => ({ hasStreetLight: value }),
);

export default function GeneralPage() {
	const [currentData, _] = useRecoilState(modifiedDataState);

	if (currentData === null) {
		return null;
	}

	return (
		<div className={styles.tabpage}>
			<div className={styles.subSection}>
				<DropDown
					selection={currentData.developmentType?.name ?? 'Unknown'}
					label="Development Type"
					options="development_types"
					onChange={printDropDown}
				/>
				<CustomCheckbox label="Has street light" />
			</div>
		</div>
	);
}
