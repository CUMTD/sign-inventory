import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

import styles from './tabPageStyles.module.css';

export default function AmenitiesPage() {
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Stop Amenities
					</Typography>
					<FormControlLabel control={<Checkbox />} label="Shelter" />
					<FormControlLabel control={<Checkbox />} label="Light in shelter" />

					<FormControlLabel control={<Checkbox />} label="Bench" />

					<FormControlLabel control={<Checkbox />} label="Trash Can" />

					<FormControlLabel control={<Checkbox />} label="Bike Rack" />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Shelter Boards
					</Typography>
					<FormControlLabel control={<Checkbox />} label="Has map" />
					<FormControlLabel control={<Checkbox />} label="Has schedule" />

					<FormControlLabel control={<Checkbox />} label="Fits frame" />
					<Typography variant="h6" component="h3">
						Count
					</Typography>
					<TextField
						id="outlined-number"
						defaultValue={2}
						type="number"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<Typography variant="h6" component="h3">
						Width
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
						Height
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
						Notes
					</Typography>
					<TextField
						multiline
						rows={4}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
			</div>
		</>
	);
}
