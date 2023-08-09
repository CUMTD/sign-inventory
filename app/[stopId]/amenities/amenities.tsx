'use client';

import { createCheckbox } from '@components/inputs/checkbox';
import NumberInput from '@components/inputs/numberInput';
import TextInput from '@components/inputs/textInput';
import { printNumberInput, printTextInput } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';
import { createHorizSlider } from '@components/inputs/horizSlider';
import { createFeetInches } from '@components/inputs/feetInches';

const HasShelterCheckbox = createCheckbox(
	({ amenities: { hasShelter } }) => hasShelter,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			hasShelter: newValue,
		},
		...childStop,
	}),
);

const HasLightCheckBox = createCheckbox(
	({ amenities: { hasShelterLight } }) => hasShelterLight,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			hasShelterLight: newValue,
		},
		...childStop,
	}),
);

const HasBenchCheckbox = createCheckbox(
	({ amenities: { hasBench } }) => hasBench,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			hasBench: newValue,
		},
		...childStop,
	}),
);

const HasTrashCanCheckbox = createCheckbox(
	({ amenities: { hasTrashCan } }) => hasTrashCan,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			hasTrashCan: newValue,
		},
		...childStop,
	}),
);

const HasBikeRackCheckbox = createCheckbox(
	({ amenities: { hasBikeRack } }) => hasBikeRack,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			hasBikeRack: newValue,
		},
		...childStop,
	}),
);

const HasMapCheckbox = createCheckbox(
	({ amenities: { hasShelterBoardMap } }) => hasShelterBoardMap,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			hasShelterBoardMap: newValue,
		},
		...childStop,
	}),
);

const HasScheduleCheckbox = createCheckbox(
	({ amenities: { hasShelterBoardSchedule } }) => hasShelterBoardSchedule,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			hasShelterBoardSchedule: newValue,
		},
		...childStop,
	}),
);

const FitsFrameCheckbox = createCheckbox(
	({ amenities: { shelterBoardsFitInFrame } }) => shelterBoardsFitInFrame,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			shelterBoardsFitInFrame: newValue,
		},
		...childStop,
	}),
);

const ShelterBoardWidthFeetInches = createFeetInches(
	({ amenities: { shelterBoardWidthFeet } }) => shelterBoardWidthFeet,
	({ amenities: { shelterBoardWidthInches } }) => shelterBoardWidthInches,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			shelterBoardWidthFeet: newValue,
		},
		...childStop,
	}),
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			shelterBoardWidthInches: newValue,
		},
		...childStop,
	}),
);

const ShelterBoardHeightFeetInches = createFeetInches(
	({ amenities: { shelterBoardHeightFeet } }) => shelterBoardHeightFeet,
	({ amenities: { shelterBoardHeightInches } }) => shelterBoardHeightInches,
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			shelterBoardHeightFeet: newValue,
		},
		...childStop,
	}),
	({ amenities, ...childStop }, newValue) => ({
		amenities: {
			...amenities,
			shelterBoardHeightInches: newValue,
		},
		...childStop,
	}),
);

export default function AmenitiesPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Stop Amenities
					</Typography>
					<HasShelterCheckbox label="Shelter" />
					<HasLightCheckBox label="Light in shelter" />
					<HasBenchCheckbox label="Bench" />

					<HasTrashCanCheckbox label="Trash Can" />
					<HasBikeRackCheckbox label="Bike Rack" />
				</div>
				<div className={styles.subSection}>
					<Typography variant="h5" component="h2">
						Shelter Boards
					</Typography>

					<HasMapCheckbox label="Has map" />
					<HasScheduleCheckbox label="Has schedule" />

					<FitsFrameCheckbox label="Fits frame" />
					<NumberInput
						label="No. of Shelter Boards"
						placeholder={stop.amenities.shelterBoardCount}
						onChange={printNumberInput}
					/>
					<ShelterBoardWidthFeetInches label="Width of Shelter Board" />
					<ShelterBoardHeightFeetInches label="Height of Shelter Board" />

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
