'use client';

import { createCheckbox } from '@components/inputs/checkbox';
import HorizSlider from '@components/inputs/horizSlider';
import { Typography } from '@mui/material';
import styles from '../page.module.css';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';
import { selectedChildStopSelector } from '@state/serverDataState';

const RampDeployableCheckbox = createCheckbox(
	({ accessibility: { rampDeployable } }) => rampDeployable,
	({ accessibility, ...childStop }, newValue) => ({
		accessibility: {
			...accessibility,
			rampDeployable: newValue,
		},
		...childStop,
	}),
);

const CurbCutoutCheckbox = createCheckbox(
	({ accessibility: { curbCutout } }) => curbCutout,
	({ accessibility, ...childStop }, newValue) => ({
		accessibility: {
			...accessibility,
			curbCutout: newValue,
		},
		...childStop,
	}),
);

const HasSlabCheckbox = createCheckbox(
	({ accessibility: { slab } }) => slab,
	({ accessibility, ...childStop }, newValue) => ({
		accessibility: {
			...accessibility,
			slab: newValue,
		},
		...childStop,
	}),
);

const SidewalkCheckbox = createCheckbox(
	({ accessibility: { sidewalk } }) => sidewalk,
	({ accessibility, ...childStop }, newValue) => ({
		accessibility: {
			...accessibility,
			sidewalk: newValue,
		},
		...childStop,
	}),
);

export default function AccessibilityPage() {
	var stop: ChildStop = useRecoilValue(selectedChildStopSelector) ?? ({} as ChildStop);

	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<RampDeployableCheckbox label="Ramp deployable" />
					<CurbCutoutCheckbox label="Curb cutout" />
					<HasSlabCheckbox label="Has slab" />
					<SidewalkCheckbox label="Accessible from sidewalk" />

					<Typography variant="h6" component="h3">
						Ease of Access
					</Typography>
					<HorizSlider
						min={1}
						max={5}
						defaultValue={stop.accessibility.easeOfAccess}
						description_set="ease_of_access"
					/>
					<Typography variant="h6" component="h3">
						Ease of Boarding
					</Typography>
					<HorizSlider
						min={1}
						max={5}
						defaultValue={stop.accessibility.easeOfBoarding}
						description_set="ease_of_boarding"
					/>
				</div>
			</div>
		</>
	);
}
