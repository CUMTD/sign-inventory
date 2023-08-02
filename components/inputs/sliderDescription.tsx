interface Props {
	value: number;
	description_set: string;
}

export default function SliderDescription({ value, description_set }: Props) {
	if (description_set === 'tilt_angle') {
		switch (value) {
			case 0:
				return 'Unknown';
			case 1:
				return 'Extremely tilted - impedes traffic';
			case 2:
				return 'Extremely tilted - does not impede traffic';
			case 3:
				return 'Moderately tilted';
			case 4:
				return 'Slightly tilted';
			case 5:
				return 'Plumb (not tilted)';
			default:
				return 'Unknown';
		}
	}
}
