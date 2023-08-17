import { ChildStop } from '@t/apiResponse';
import { assert } from 'console';
import { atom, selector } from 'recoil';

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

		console.log('equal?: ', JSON.stringify(initialData) === JSON.stringify(modifiedData));
		return JSON.stringify(initialData) !== JSON.stringify(modifiedData);
	},
});

export const isDataModifiedState = atom<boolean>({
	key: 'isDataModifiedState',
	default: false,
});
