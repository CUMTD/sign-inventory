export interface ChildStop {
	id: string;
	name: string;
	smsCode: string;
	developmentTypeId: string;
	hasStreetLight: boolean;
	notes: string | null;
	dateCreated: string;
	lastUpdated: string;
	developmentType: DevelopmentType | null;
	accessibility: Accessibility | null;
	sign: Sign | null;
	amenities: Amenity | null;
}

export interface DevelopmentType {
	id: string;
	name: string;
	order: number;
}

export interface Amenity {
	stopPointId: string;
	hasShelter: boolean;
	hasShelterLight: boolean;
	hasBench: boolean;
	hasTrashCan: boolean;
	hasBikeRack: boolean;
	hasShelterBoardMap: boolean;
	hasShelterBoardSchedule: boolean;
	shelterBoardsFitInFrame: boolean;
	shelterBoardCount: number;
	shelterBoardNotes: string;
	shelterBoardWidthFeet: number;
	shelterBoardWidthInches: number;
	shelterBoardHeightFeet: number;
	shelterBoardHeightInches: number;
}

export interface Accessibility {
	stopPointId: string;
	rampDeployable: boolean;
	curbCutout: boolean;
	slab: boolean;
	sidewalk: boolean;
	easeOfAccess: number;
	easeOfBoarding: number;
}

export interface Sign {
	stopPointId: string;
	hasSign: boolean;
	heightFeet: number;
	heightInches: number;
	distanceFromCurbFeet: number;
	distanceFromCurbInches: number;
	tilt: number;
	poleTypeId: string;
	correctStopCode: boolean;
	hasCrimeStoppers: boolean;
	isFaded: boolean;
	isBroken: boolean;
	signReplacementDate: string;
	poleType: PoleType;
}

export interface PoleType {
	id: string;
	name: string;
	order: number;
}
