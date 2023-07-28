'use client';

import CheckBox from '@components/inputs/checkbox';
import HorizSlider from '@components/inputs/horizSlider';
import { printCheckBox } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from '../page.module.css';

// interface Props {
// 	params: {
// 		parent: string;
// 		child: string;
// 	};
// }

export default function AccessibilityPage() {
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<CheckBox label="Ramp deployable" value={true} onChange={printCheckBox} />
					<CheckBox label="Curb cutout" value={true} onChange={printCheckBox} />

					<CheckBox label="Has slab" value={true} onChange={printCheckBox} />

					<CheckBox label="Accessible from sidewalk" value={true} onChange={printCheckBox} />

					<Typography variant="h6" component="h3">
						Ease of Access
					</Typography>
					<HorizSlider min={1} max={5} />
					<Typography variant="h6" component="h3">
						Ease of Boarding
					</Typography>
					<HorizSlider min={1} max={5} />
				</div>
			</div>
		</>
	);
}
