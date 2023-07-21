import General from '@t/general';
import { atom } from 'recoil';

export const generalState = atom<General>({
	key: 'generalState',
	default: {
		streetLight: false,
		developmentType: null,
	},
});
