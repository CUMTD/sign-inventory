'use client';
import { createCheckbox } from '@components/inputs/checkbox';
import DropDown from '@components/inputs/dropdown';
import { printDropDown } from '@helpers/placeholderPrinters';
import { modifiedDataState } from '@state/serverDataState';
import { useRecoilState } from 'recoil';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';

const StreetLightCheckbox = createCheckbox(
	({ hasStreetLight }) => hasStreetLight,
	(data, newValue) => ({
		...data,
		hasStreetLight: newValue,
	}),
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
				<StreetLightCheckbox label="Has street light" />
			</div>
		</div>
	);
}
