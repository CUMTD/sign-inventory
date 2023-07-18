'use client';

import { Checkbox, FormControlLabel, MenuItem, Select, Slider, Typography } from '@mui/material';
import styles from '../tabPageStyles.module.css';
import CheckBox from '@/app/components/inputs/checkbox';
import FeetInches from '@/app/components/inputs/feetInches';
import HorizSlider from '@/app/components/inputs/horizSlider';
import DropDown from '@/app/components/inputs/dropdown';
import DatePicker from '@/app/components/inputs/datePicker';
import { printCheckBox, printDropDown } from '@/helpers/placeholderPrinters';

interface Props {
	params: {
		parent: string;
		child: string;
	};
}

export default function Page({ params: { parent, child } }: Props) {
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<CheckBox label="Has sign" value={true} onChange={printCheckBox} />
				</div>

				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Pole
					</Typography>

					<Typography variant="h6" component="h3">
						Height to Bottom of Sign
					</Typography>

					<div className={styles.footInchInput}>
						<FeetInches />
					</div>
					<Typography variant="h6" component="h3">
						Distance from Curb at Base
					</Typography>
					<div className={styles.footInchInput}>
						<FeetInches />
					</div>
					<Typography variant="h6" component="h3">
						Tilt Angle
					</Typography>
					<HorizSlider min={1} max={6} />
					<DropDown label="Pole Type" options="pole_types" onChange={printDropDown} />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Accuracy
					</Typography>
					<CheckBox label="Correct SMS Code" value={true} onChange={printCheckBox} />
					<CheckBox label="Has Crime Stoppers logo" value={true} onChange={printCheckBox} />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Condition
					</Typography>
					<CheckBox label="Faded" value={true} onChange={printCheckBox} />
					<CheckBox label="Broken" value={true} onChange={printCheckBox} />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Last Replacement Date
					</Typography>

					<DatePicker />
				</div>
			</div>
		</>
	);
}
