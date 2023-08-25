'use client';

import { createCheckbox } from '@components/inputs/checkbox';
import { createHorizSlider } from '@components/inputs/horizSlider';
import SliderSet from '@t/sliderSet';
import styles from '../page.module.css';

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

const EaseOfAccessSlider = createHorizSlider(
	({ accessibility: { easeOfAccess } }) => easeOfAccess,
	({ accessibility, ...childStop }, newValue) => ({
		accessibility: {
			...accessibility,
			easeOfAccess: newValue,
		},
		...childStop,
	}),
	SliderSet.EaseOfAccess
);

const EaseOfBoardingSlider = createHorizSlider(
	({ accessibility: { easeOfBoarding } }) => easeOfBoarding,
	({ accessibility, ...childStop }, newValue) => ({
		accessibility: {
			...accessibility,
			easeOfBoarding: newValue,
		},
		...childStop,
	}),
	SliderSet.EaseOfBoarding
);

export default function AccessibilityPage() {
	return (
		<>
			<div className={styles.tabpage}>
				<div className={styles.subSection}>
					<RampDeployableCheckbox label="Ramp deployable" />
					<CurbCutoutCheckbox label="Curb cutout" />
					<HasSlabCheckbox label="Has slab" />
					<SidewalkCheckbox label="Accessible from sidewalk" />
				</div>
				<div className={styles.subSection}>
					<EaseOfAccessSlider label={'Ease of Access'} />
				</div>
				<div className={styles.subSection}>
					<EaseOfBoardingSlider label={'Ease of Boarding'} />
				</div>
			</div>
		</>
	);
}
