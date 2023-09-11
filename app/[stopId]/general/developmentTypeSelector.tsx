import DevelopmentTypeDropdown from './developmentTypeDropdown';
import { useRecoilValue } from 'recoil';
import { developmentTypesState } from '@state/serverDataState';

export default function DevelopmentTypeSelector() {
	const developmentTypes = useRecoilValue(developmentTypesState);
	return <DevelopmentTypeDropdown developmentTypes={developmentTypes} />;
}
