export interface Highlight {
	highlightPart: string | null;
	noHighlightPart: string | null;
}

export interface Result {
	id: string;
	smsCode: string;
	name: string;
	city: string;
	isParent: boolean;
	rank: number;
}

export default interface Suggestion {
	queryHighlight: Highlight[];
	result: Result;
	score: number;
}
