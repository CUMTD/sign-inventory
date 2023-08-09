'use client';
import { createCheckbox } from '@components/inputs/checkbox';
import DropDown, { createDropDown } from '@components/inputs/dropdown';
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

const DevelopmentTypeDropDown = createDropDown(
	({ developmentType: { name } }) => name,
	({ developmentType, ...childStop }, newValue) => ({
		developmentType: {
			...developmentType,
			name: newValue,
		},
		...childStop,
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
				<DevelopmentTypeDropDown label="Development Type" options="development_types" />
				<StreetLightCheckbox label="Has street light" />
			</div>
		</div>
	);
}
