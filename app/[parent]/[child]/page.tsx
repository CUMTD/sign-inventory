'use client';
import generateCheckBox from '@/app/components/inputs/checkbox';
import styles from './tabPageStyles.module.css';
import DropDown from '@/app/components/inputs/dropdown';
import { Typography } from '@mui/material';
import { generalState } from '@/state/generalState';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import General from '@/types/general';
import CheckBox from '@/app/components/inputs/checkbox';
import { printCheckBox, printDropDown } from '@/helpers/placeholderPrinters';

interface Props {
	params: {
		parent: string;
		child: string;
	};
}

/* function streetLightBooleanGetter(model: General) {
	return model.streetLight;
}

function streetLightBooleanSetter(setter: SetterOrUpdater<General>) {
	return function setterFn(value: boolean, current: General) {
		const newVal: General = {
			...current,
			streetLight: value,
		};
		setter(newVal);
	};
}

const StreetLightCheckBox = generateCheckBox<General>(streetLightBooleanGetter, streetLightBooleanSetter); */

export default function Page({ params: { parent, child } }: Props) {
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<DropDown label="Development Type" options="development_types" onChange={printDropDown} />
					<CheckBox label="Has street light" value={true} onChange={printCheckBox} />
				</div>
				<Typography variant="subtitle1" component="h3">
					Last updated MM-DD-YYYY
				</Typography>
			</div>
		</>
	);
}
