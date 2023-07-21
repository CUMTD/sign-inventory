'use client';

import CheckBox from '@components/inputs/checkbox';
import FeetInches from '@components/inputs/feetInches';
import NumberInput from '@components/inputs/numberInput';
import TextInput from '@components/inputs/textInput';
import { printCheckBox, printNumberInput, printTextInput } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from '../page.module.css';

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
					<Typography variant="h5" component="h2">
						Stop Amenities
					</Typography>
					<CheckBox label="Shelter" value={true} onChange={printCheckBox} />

					<CheckBox label="Light in shelter" value={true} onChange={printCheckBox} />

					<CheckBox label="Bench" value={true} onChange={printCheckBox} />

					<CheckBox label="Trash Can" value={true} onChange={printCheckBox} />

					<CheckBox label="Bike Rack" value={true} onChange={printCheckBox} />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Shelter Boards
					</Typography>
					<CheckBox label="Has map" value={true} onChange={printCheckBox} />

					<CheckBox label="Has schedule" value={true} onChange={printCheckBox} />

					<CheckBox label="Fits frame" value={true} onChange={printCheckBox} />
					<NumberInput label="No. of Shelter Boards" placeholder={0} onChange={printNumberInput} />
					<Typography variant="h6" component="h3">
						Width of Shelter Board
					</Typography>
					<div className={styles.footInchInput}>
						<FeetInches />
					</div>
					<Typography variant="h6" component="h3">
						Height of Shelter Board
					</Typography>
					<div className={styles.footInchInput}>
						<FeetInches />
					</div>

					<TextInput
						label="Notes"
						placeholder="Ex. Sign is faded, map/schedule doesn't fit, etc."
						onChange={printTextInput}
					></TextInput>
				</div>
			</div>
		</>
	);
}
