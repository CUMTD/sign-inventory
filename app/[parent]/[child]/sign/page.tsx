'use client';

import { Checkbox, FormControlLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import styles from '../../tabPageStyles.module.css';

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
					<FormControlLabel control={<Checkbox />} label="Has sign" />
				</div>

				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Pole
					</Typography>

					<Typography variant="h6" component="h3">
						Height to Bottom of Sign
					</Typography>

					<div className={styles.footInchInput}>
						<TextField
							id="outlined-number"
							label="Feet"
							type="number"
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<TextField
							id="outlined-number"
							label="Inches"
							type="number"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</div>
					<Typography variant="h6" component="h3">
						Distance from Curb at Base
					</Typography>
					<div className={styles.footInchInput}>
						<TextField
							id="outlined-number"
							label="Feet"
							type="number"
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<TextField
							id="outlined-number"
							label="Inches"
							type="number"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</div>
					<Typography variant="h6" component="h3">
						Tilt Angle
					</Typography>
					<Slider defaultValue={6} min={1} max={6} marks valueLabelDisplay="on" />
					<Typography variant="h6" component="h3">
						Pole Type
					</Typography>
					<Select defaultValue={1}>
						<MenuItem value={1}>Unknown</MenuItem>
						<MenuItem value={2}>MTD Pole</MenuItem>
						<MenuItem value={3}>Stop Sign</MenuItem>
						<MenuItem value={4}>Street Light</MenuItem>
						<MenuItem value={5}>Traffic Light</MenuItem>
						<MenuItem value={6}>Utility Pole</MenuItem>
						<MenuItem value={7}>Other Pole</MenuItem>
					</Select>
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Accuracy
					</Typography>
					<FormControlLabel control={<Checkbox />} label="Correct SMS Code" />
					<FormControlLabel control={<Checkbox />} label="Has Crime Stoppers Logo" />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Condition
					</Typography>
					<FormControlLabel control={<Checkbox />} label="Faded" />
					<FormControlLabel control={<Checkbox />} label="Broken" />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Last Replacement Date
					</Typography>
					<input type="date" />
				</div>
			</div>
		</>
	);
}
