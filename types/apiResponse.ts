export interface ChildStop {
	id: string;
	name: string;
	smsCode: string;
	developmentTypeId: string;
	hasStreetLight: boolean;
	notes: string;
	dateCreated: string;
	lastUpdated: Date;
	developmentType: DevelopmentType;
	accessibility: Accessibility;
	sign: Sign;
	amenities: Amenity;
	content: string;
}

export interface DevelopmentType {
	id: string;
	name: string;
	order: number;
	isDefault: boolean;
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
	signReplacementDate: Date;
	poleType: PoleType;
}

export interface PoleType {
	id: string;
	name: string;
	order: number;
	isDefault: boolean;
}
