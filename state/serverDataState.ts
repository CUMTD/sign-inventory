import fetchNewData from '@helpers/fetchNewData';
import { ChildStop } from '@t/apiResponse';
import { atom, selector } from 'recoil';

export const serverDataState = atom<ChildStop[]>({
	key: 'serverDataState',
	default: [],
});

export const serverDataSelector = selector<ChildStop[]>({
	key: 'serverDataSelector',
	get: ({ get }) => {
		return get(serverDataState);
	},
});

export const firstChildStopId = selector<ChildStop[]>({
	key: 'firstChildStopId',
	get: ({ get }) => {
		return get(serverDataState);
	},
});
