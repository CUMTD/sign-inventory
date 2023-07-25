import { ChildStop } from '@t/apiResponse';
import { atom, selector } from 'recoil';

export const currentStopIdState = atom<string>({
	key: 'currentStopIdState',
	default: '',
});

export const selectedChildStopState = atom<number>({
	key: 'selectedChildStopState',
	default: 0,
});


export const childStopsState = atom<ChildStop[]>({
	key: 'childStopsState',
	default: []
});

export const selectedStopIdSelector = selector<string>({
	key: 'selectedStopIdSelector',
	get: ({ get }) => {
		const currentStopId = get(currentStopIdState);
		const selectedChildStop = get(selectedChildStopState);

		return `${currentStopId}:${selectedChildStop}`;
	}
});
