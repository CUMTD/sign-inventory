import { ChildStop } from '@/types/apiResponse';
import { atom, selector } from 'recoil';

export const serverDataState = atom<ChildStop[]>({
	key: 'serverDataState',
	default: [],
});

// export const serverDataSelector = selector<ChildStop[]>({
// 	key: 'serverDataSelector',
// 	// get: async () => {
// 	// 	let stops: ChildStop[] = [];
// 	// 	const response = await fetch('https://localhost:7135/stop-point/GRNORCH');
// 	// 	stops = (await response.json()) as ChildStop[];
// 	// 	return stops.map((stop) => stop);
// 	},
// }
// );
