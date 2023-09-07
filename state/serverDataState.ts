import { ChildStop } from '@t/apiResponse';
import { DefaultValue, atom, selector } from 'recoil';
import equal from 'fast-deep-equal';

export const selectedTabState = atom<number>({
	key: 'selectedTabState',
	default: 0,
});

//just the string in front
export const selectedStopFriendlyNameState = atom<string>({
	key: 'selectedStopFriendlyNameState',
	default: 'Parent Stop Name',
});

//just the string in front
export const selectedParentStopState = atom<string>({
	key: 'selectedParentStopState',
	default: '',
});

// this is a number
export const selectedChildStopState = atom<number>({
	key: 'selectedChildStopState',
	default: 0,
});

// return STRING:NUM
export const selectedStopIdSelector = selector<string>({
	key: 'selectedStopIdSelector',
	get: ({ get }) => {
		const selectedParentStop = get(selectedParentStopState);
		const selectedChildStop = get(selectedChildStopState);

		return `${selectedParentStop}:${selectedChildStop}`;
	},
});

// all the possible child stops
export const childStopsState = atom<ChildStop[]>({
	key: 'childStopsState',
	default: [],
});

export const selectedChildStopSelector = selector<ChildStop>({
	key: 'selectedChildStopSelector',
	get: ({ get }) => {
		const childStops = get(childStopsState);
		const selectedChildStop = get(selectedChildStopState);
		const filtered = childStops.find((stop) => parseInt(stop.id.split(':')[1]) === selectedChildStop);
		if (filtered === undefined) {
			throw new Error('selectedChildStopSelector: filtered is undefined');
		}
		return filtered;
	},
});

export const initialDataState = atom<ChildStop | null>({
	key: 'initialDataState',
	default: null,
});

export const modifiedDataState = atom<ChildStop | null>({
	key: 'modifiedDataState',
	default: null,
});

export const isDataModifiedSelector = selector<boolean>({
	key: 'isDataModifiedSelector',
	get: ({ get }) => {
		const initialData = get(initialDataState);
		const modifiedData = get(modifiedDataState);

		return !equal(initialData, modifiedData);
	},
});

export const isDataModifiedState = atom<boolean>({
	key: 'isDataModifiedState',
	default: false,
});

export const isBlinkWarningState = atom<boolean>({
	key: 'isBlinkWarningState',
	default: false,
});

export const lastUpdatedSelector = selector<string>({
	key: 'lastUpdatedSelector',
	get: ({ get }) => {
		const initialData = get(initialDataState);
		if (initialData === null) {
			return 'N/A';
		}
		// return nicely formatted date
		return new Date(initialData.lastUpdated).toLocaleString();
	},
});

type ModifiedAndIntial = {
	initial: ChildStop | null;
	modified: ChildStop | null;
};

function isModifiedAndIntial(obj: ModifiedAndIntial | DefaultValue): obj is ModifiedAndIntial {
	return (obj as ModifiedAndIntial).initial !== undefined;
}

// selector that simultaneously updates modifiedDataState and initialDataState
export const updateModifiedAndInitialDataState = selector<ModifiedAndIntial>({
	key: 'updateModifiedAndInitialDataState',
	get: ({ get }) => {
		const initial = get(initialDataState);
		const modified = get(modifiedDataState);
		return { initial, modified };
	},
	set: ({ set }, newValue) => {
		if (isModifiedAndIntial(newValue)) {
			console.log('ModifiedAndIntial passed', newValue);
			const { initial, modified } = newValue;
			set(initialDataState, initial);
			set(modifiedDataState, modified);
		} else {
			console.log('default value passed', newValue);
		}
	},
});

type SnackBarState = {
	open: boolean;
	state: 'error' | 'success';
};

export const displaySnackbarState = atom<SnackBarState>({
	key: 'displaySnackbarState',
	default: {
		open: false,
		state: 'error',
	},
});
