import DevelopmentTypeDropdown from './developmentTypeDropdown';
import { useRecoilValue } from 'recoil';
import { developmentTypesState } from '@state/serverDataState';

export default function DevelopmentTypeSelector() {
	const developmentTypes = useRecoilValue(developmentTypesState);
	if (developmentTypes.length === 0) return null;
	return <DevelopmentTypeDropdown developmentTypes={developmentTypes} />;
}
