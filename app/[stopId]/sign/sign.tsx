'use client';

import { createCheckbox } from '@components/inputs/checkbox';
import { createDatePicker } from '@components/inputs/datePicker';
import { createDropDown } from '@components/inputs/dropdown';
import { createHorizSlider } from '@components/inputs/horizSlider';
import { Typography } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';
import { createFeetInches } from '@components/inputs/feetInches';
import { create } from 'domain';

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
		},
		...childStop,
	}),
);

const HeightToBottomOfSignFeetInches = createFeetInches(
	({ sign: { heightFeet } }) => heightFeet,
	({ sign: { heightInches } }) => heightInches,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			heightFeet: newValue,
		},
		...childStop,
	}),
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			heightInches: newValue,
		},
		...childStop,
	}),
);

const DistanceFromCurbAtBase = createFeetInches(
	({ sign: { distanceFromCurbFeet } }) => distanceFromCurbFeet,
	({ sign: { distanceFromCurbInches } }) => distanceFromCurbInches,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			distanceFromCurbFeet: newValue,
		},
		...childStop,
	}),
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			distanceFromCurbInches: newValue,
		},
		...childStop,
	}),
);

const TiltAngleSlider = createHorizSlider(
	({ sign: { tilt } }) => tilt,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			tilt: newValue,
		},
		...childStop,
	}),
);

const SignReplacementDatePicker = createDatePicker(
	({ sign: { signReplacementDate } }) => signReplacementDate,
	({ sign, ...childStop }, newValue) => ({
		sign: {
			...sign,
			signReplacementDate: newValue,
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

					<HeightToBottomOfSignFeetInches label="Height to Bottom of Sign" />
					<DistanceFromCurbAtBase label="Distance from Curb at Base" />
					<TiltAngleSlider label="Tilt Angle" min={1} max={5} description_set="tilt_angle" />
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
					<SignReplacementDatePicker label="Sign Replacement Date" />
				</div>
			</div>
		</>
	);
}
