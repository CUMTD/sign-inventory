import { Checkbox, FormControlLabel, MenuItem, Select, Typography } from '@mui/material';

import styles from './tabPageStyles.module.css';

export default function GeneralPage() {
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<Typography variant="h6" component="h3">
						Development Type
					</Typography>
					<Select defaultValue={1} labelId="dev-type">
						<MenuItem value={1}>Unknown</MenuItem>
						<MenuItem value={2}>Campus</MenuItem>
						<MenuItem value={3}>Commercial</MenuItem>
						<MenuItem value={4}>Residential</MenuItem>
						<MenuItem value={5}>Other</MenuItem>
					</Select>
					<FormControlLabel control={<Checkbox />} label="Has Street Light" />
				</div>
				<Typography variant="subtitle1" component="h3">
					Last updated MM-DD-YYYY
				</Typography>
			</div>
		</>
	);
}
