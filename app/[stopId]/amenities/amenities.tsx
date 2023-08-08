'use client';

import CheckBox, { createCheckbox } from '@components/inputs/checkbox';
import FeetInches from '@components/inputs/feetInches';
import NumberInput from '@components/inputs/numberInput';
import TextInput from '@components/inputs/textInput';
import { printCheckBox, printNumberInput, printTextInput } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';

function valueSelector({ amenities: { hasShelter } }: ChildStop) {
	return hasShelter;
}

function updateFunction({ amenities, ...childStop }: ChildStop, newValue: boolean) {
	const newChildStop: ChildStop = {
		...childStop,
		amenities: {
			...amenities,
			hasShelter: newValue,
		},
	};
	return newChildStop;
}

const ShelterCheckBox = createCheckbox(valueSelector, updateFunction);

export default function AmenitiesPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Stop Amenities
					</Typography>
					<ShelterCheckBox label="Shelter" />

					<CheckBox label="Light in shelter" value={stop.amenities.hasShelterLight} onChange={printCheckBox} />

					<CheckBox label="Bench" value={stop.amenities.hasBench} onChange={printCheckBox} />

					<CheckBox label="Trash Can" value={stop.amenities.hasTrashCan} onChange={printCheckBox} />

					<CheckBox label="Bike Rack" value={stop.amenities.hasBikeRack} onChange={printCheckBox} />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Shelter Boards
					</Typography>
					<CheckBox label="Has map" value={stop.amenities.hasShelterBoardMap} onChange={printCheckBox} />

					<CheckBox label="Has schedule" value={stop.amenities.hasShelterBoardSchedule} onChange={printCheckBox} />

					<CheckBox label="Fits frame" value={stop.amenities.shelterBoardsFitInFrame} onChange={printCheckBox} />
					<NumberInput
						label="No. of Shelter Boards"
						placeholder={stop.amenities.shelterBoardCount}
						onChange={printNumberInput}
					/>
					<Typography variant="h6" component="h3">
						Width of Shelter Board
					</Typography>
					<div className={styles.footInchInput}>
						<FeetInches
							initFeet={stop.amenities.shelterBoardWidthFeet}
							initInches={stop.amenities.shelterBoardWidthInches}
						/>
					</div>

					<Typography variant="h6" component="h3">
						Height of Shelter Board
					</Typography>
					<div className={styles.footInchInput}>
						<FeetInches
							initFeet={stop.amenities.shelterBoardHeightFeet}
							initInches={stop.amenities.shelterBoardHeightInches}
						/>
					</div>

					<TextInput
						label="Notes"
						placeholder="Ex. Frame is empty, map/schedule doesn't fit, etc."
						defaultValue={stop.amenities.shelterBoardNotes}
						onChange={printTextInput}
					></TextInput>
				</div>
			</div>
		</>
	);
}
