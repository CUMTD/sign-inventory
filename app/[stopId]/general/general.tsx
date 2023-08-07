'use client';
import CheckBox from '@components/inputs/checkbox';
import DropDown from '@components/inputs/dropdown';
import { printDropDown } from '@helpers/placeholderPrinters';
import { modifiedDataState } from '@state/serverDataState';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styles from '../page.module.css';

export default function GeneralPage() {
	const [currentData, setCurrentData] = useRecoilState(modifiedDataState);

	const hasStreetLightChange = useCallback((value: boolean) => {
		if (currentData !== null) {
			setCurrentData({
				...currentData,
				hasStreetLight: value
			});
		}
	}, [currentData, setCurrentData]);

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
				<CheckBox label="Has street light" value={currentData.hasStreetLight} onChange={hasStreetLightChange} />
			</div>
		</div>
	);
}
