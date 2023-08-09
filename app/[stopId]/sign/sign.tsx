'use client';

import { createCheckbox } from '@components/inputs/checkbox';
import DatePicker from '@components/inputs/datePicker';
import DropDown, { createDropDown } from '@components/inputs/dropdown';
import FeetInches from '@components/inputs/feetInches';
import HorizSlider from '@components/inputs/horizSlider';
import { printCheckBox, printDropDown } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';

const HasSignCheckbox = createCheckbox(
	({ sign: { hasSign } }) => hasSign,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			hasSign: newValue,
		},
		...childStop,
	}),
);

const CorrectStopCodeCheckbox = createCheckbox(
	({ sign: { correctStopCode } }) => correctStopCode,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			correctStopCode: newValue,
		},
		...childStop,
	}),
);

const HasCrimeStoppersCheckbox = createCheckbox(
	({ sign: { hasCrimeStoppers } }) => hasCrimeStoppers,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			hasCrimeStoppers: newValue,
		},
		...childStop,
	}),
);

const IsFadedCheckbox = createCheckbox(
	({ sign: { isFaded } }) => isFaded,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			isFaded: newValue,
		},
		...childStop,
	}),
);

const IsBrokenCheckbox = createCheckbox(
	({ sign: { isBroken } }) => isBroken,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			isBroken: newValue,
		},
		...childStop,
	}),
);

const PoleTypeDropDown = createDropDown(
	({
		sign: {
			poleType: { name },
		},
	}) => name,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			poleType: {
				...sign.poleType,
				name: newValue,
			},
			// name: newValue,
		},
		...childStop,
	}),
);

export default function SignPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<HasSignCheckbox label="Has sign" />
				</div>

				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Pole
					</Typography>

					<Typography variant="h6" component="h3">
						Height to Bottom of Sign
					</Typography>

					<div className={styles.footInchInput}>
						<FeetInches initFeet={stop.sign.heightFeet ?? 0} initInches={stop.sign.heightInches ?? 0} />
					</div>
					<Typography variant="h6" component="h3">
						Distance from Curb at Base
					</Typography>
					<div className={styles.footInchInput}>
						<FeetInches
							initFeet={stop.sign.distanceFromCurbFeet ?? 0}
							initInches={stop.sign.distanceFromCurbInches ?? 0}
						/>
					</div>
					<Typography variant="h6" component="h3">
						Tilt Angle
					</Typography>
					<HorizSlider min={0} max={5} defaultValue={stop.sign.tilt ?? 0} description_set="tilt_angle" />
					<PoleTypeDropDown label="Pole Type" options="pole_types" />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Accuracy
					</Typography>
					<CorrectStopCodeCheckbox label="Correct Stop Code" />
					<HasCrimeStoppersCheckbox label="Has Crime Stoppers logo" />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Condition
					</Typography>
					<IsFadedCheckbox label="Faded" />
					<IsBrokenCheckbox label="Broken" />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Last Replacement Date
					</Typography>

					<DatePicker initDate={stop.sign.signReplacementDate} />
				</div>
			</div>
		</>
	);
}
