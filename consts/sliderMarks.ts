import SliderSet from "@t/sliderSet";

interface SliderMark {
	value: number;
	label: string;
}

interface SliderMarksType {
	[SliderSet.TiltAngle]: SliderMark[];
	[SliderSet.EaseOfAccess]: SliderMark[];
	[SliderSet.EaseOfBoarding]: SliderMark[];
}

const sliderMarks: SliderMarksType = {
	[SliderSet.TiltAngle]: [
		{
			value: 1,
			label: 'Extremely Tilted'
		},
		{
			value: 3,
			label: 'Moderately Tilted'
		},
		{
			value: 5,
			label: 'Plumb'
		}

	],
	[SliderSet.EaseOfAccess]: [
		{
			value: 1,
			label: 'Not Accessible'
		},
		{
			value: 3,
			label: 'Somewhat Accessible'
		},
		{
			value: 5,
			label: 'Easily Accessible'
		}
	],
	[SliderSet.EaseOfBoarding]: [
		{
			value: 1,
			label: 'Difficult'
		},
		{
			value: 3,
			label: 'Reasonable'
		},
		{
			value: 5,
			label: 'Easy'
		}
	]
}

export default sliderMarks;
