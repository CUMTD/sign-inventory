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
	if (description_set == 'ease_of_access') {
		switch (value) {
			case 0:
				return 'Unknown';
			case 1:
				return 'This area is not accessible. There are no sidewalks on surrounding streets. I am unsure where is best to cross the street and there are no traffic controls to assist me. The volume or speed of traffic makes me feel vulnerable or unsafe in crossing the street.';
			case 2:
				return '';
			case 3:
				return 'This area is somewhat accessible. There may be an underdeveloped sidewalk system, but with low enough traffic that I feel safe crossing the street. There may be a well-developed system for navigating the area, but traffic might make me feel unsafe crossing the street.';
			case 4:
				return '';
			case 5:
				return 'This area is easily accessible. There are well-developed sidewalks on surrounding streets, creating a solid network. There are clear crosswalks to navigate intersections. Traffic speeds and volumes make me feel like I can safely cross the street.';
		}
	}
	if (description_set == 'ease_of_boarding') {
		switch (value) {
			case 0:
				return 'Unknown';
			case 1:
				return 'This stop makes it difficult to board. The sidewalk is set back from the edge of the pavement or there may be no sidewalk. The site is located near a ditch or is otherwise hazardous to navigate. Standing at the stop, it is unclear where to board.';
			case 2:
				return '';
			case 3:
				return 'This is a reasonable stop. The area around the stop is easily accessible, though care would need to be taken for a passenger using a wheelchair or walker.';
			case 4:
				return '';
			case 5:
				return 'This stop is easy to board. Pavement is available to connect the sidewalk to the street. The site is level and clear of hazards. It is clear where to board.';
		}
	}
}
