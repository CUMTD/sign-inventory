import PoleTypeDropdown from './poleTypeDropdown';
import { useRecoilValue } from 'recoil';
import { poleTypesState } from '@state/serverDataState';

export default function PoleTypeSelector() {
	const poleTypes = useRecoilValue(poleTypesState);
	return <PoleTypeDropdown poleTypes={poleTypes} />;
}
