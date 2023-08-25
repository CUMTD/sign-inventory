import { atom, selector } from 'recoil';

export const userLoggedInState = atom<boolean>({
	key: 'userLoggedInState',
	default: false,
});
