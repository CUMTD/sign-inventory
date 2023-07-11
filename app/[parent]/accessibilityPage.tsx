import { Checkbox, FormControlLabel, Slider, Typography } from '@mui/material';

import styles from './tabPageStyles.module.css';

export default function AccessibilityPage() {
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<FormControlLabel control={<Checkbox />} label="Ramp deployable" />
					<FormControlLabel control={<Checkbox />} label="Curb cutout" />
					<FormControlLabel control={<Checkbox />} label="Has slab" />
					<FormControlLabel control={<Checkbox />} label="Accessible from sidewalk" />{' '}
					<Typography variant="h6" component="h3">
						Ease of Access
					</Typography>
					<Slider defaultValue={3} min={1} max={5} marks valueLabelDisplay="on" />
					<Typography variant="h6" component="h3">
						Ease of Boarding
					</Typography>
					<Slider defaultValue={3} min={1} max={5} marks valueLabelDisplay="on" />
				</div>
			</div>
		</>
	);
}
