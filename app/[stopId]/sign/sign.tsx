'use client';

import CheckBox, { createCheckbox } from '@components/inputs/checkbox';
import DatePicker from '@components/inputs/datePicker';
import DropDown from '@components/inputs/dropdown';
import FeetInches from '@components/inputs/feetInches';
import HorizSlider from '@components/inputs/horizSlider';
import { printCheckBox, printDropDown } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';

export default function SignPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);

	// const CustomCheckbox = createCheckbox(
	// 	({ sign: { hasSign } }) => hasSign,
	// 	(value) => ({
	// 		sign: {
	// 			hasSign: value,
	// 		},
	// 	}),
	// );

	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<CheckBox label="Has sign" value={stop.sign.hasSign ?? false} onChange={printCheckBox} />
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
					<DropDown
						selection={stop.sign.poleType?.name ?? 'Unknown'}
						label="Pole Type"
						options="pole_types"
						onChange={printDropDown}
					/>
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Accuracy
					</Typography>
					<CheckBox label="Correct SMS Code" value={stop.sign.correctStopCode ?? false} onChange={printCheckBox} />
					<CheckBox
						label="Has Crime Stoppers logo"
						value={stop.sign.hasCrimeStoppers ?? false}
						onChange={printCheckBox}
					/>
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Condition
					</Typography>
					<CheckBox label="Faded" value={stop.sign.isFaded ?? false} onChange={printCheckBox} />
					<CheckBox label="Broken" value={stop.sign.isBroken ?? false} onChange={printCheckBox} />
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
