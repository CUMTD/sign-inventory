import PoleTypeDropdown from './poleTypeDropdown';
import { useRecoilValue } from 'recoil';
import { poleTypesState } from '@state/serverDataState';

export default function PoleTypeSelector() {
	const poleTypes = useRecoilValue(poleTypesState);
	if (poleTypes.length === 0) return null;

	return <PoleTypeDropdown poleTypes={poleTypes} />;
}
