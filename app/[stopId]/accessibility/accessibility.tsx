'use client';

import CheckBox from '@components/inputs/checkbox';
import HorizSlider from '@components/inputs/horizSlider';
import { printCheckBox } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';

export default function AccessibilityPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);

	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<CheckBox label="Ramp deployable" value={stop.accessibility.rampDeployable} onChange={printCheckBox} />
					<CheckBox label="Curb cutout" value={stop.accessibility.curbCutout} onChange={printCheckBox} />

					<CheckBox label="Has slab" value={stop.accessibility.slab} onChange={printCheckBox} />

					<CheckBox label="Accessible from sidewalk" value={stop.accessibility.sidewalk} onChange={printCheckBox} />

					<Typography variant="h6" component="h3">
						Ease of Access
					</Typography>
					<HorizSlider min={1} max={5} defaultValue={stop.accessibility.easeOfAccess} />
					<Typography variant="h6" component="h3">
						Ease of Boarding
					</Typography>
					<HorizSlider min={1} max={5} defaultValue={stop.accessibility.easeOfAccess} />
				</div>
			</div>
		</>
	);
}
