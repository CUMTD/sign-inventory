'use client';
import CheckBox from '@components/inputs/checkbox';
import DropDown from '@components/inputs/dropdown';
import { printCheckBox, printDropDown } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from './page.module.css';

interface Props {
	params: {
		stopId: string;
	};
}

export default function Page({ params }: Props) {
	return (
		<div className={styles.tabpage}>
			<div className={styles.subSection}>
				<DropDown label="Development Type" options="development_types" onChange={printDropDown} />
				<CheckBox label="Has street light" value={true} onChange={printCheckBox} />
			</div>
			<Typography variant="subtitle1" component="h3">
				Last updated MM-DD-YYYY
			</Typography>
		</div>
	);
}
