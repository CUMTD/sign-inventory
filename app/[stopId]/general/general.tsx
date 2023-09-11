'use client';
import { createCheckbox } from '@components/inputs/checkbox';
import { modifiedDataState } from '@state/serverDataState';
import { useRecoilState } from 'recoil';
import styles from '../page.module.css';
import DevelopmentTypeSelector from './developmentTypeSelector';

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
				<DevelopmentTypeSelector />
				<StreetLightCheckbox label="Has street light" />
			</div>
		</div>
	);
}
