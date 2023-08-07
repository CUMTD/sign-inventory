import { selectedTabState } from '@state/serverDataState';
import { useRecoilValue } from 'recoil';
import GeneralPage from './general/general';
import SignPage from './sign/sign';
import AccessibilityPage from './accessibility/accessibility';
import AmenitiesPage from './amenities/amenities';
import NotesPage from './notes/notes';
import PhotoPage from './photo/photo';

// returns the page corresponding to the selected tab
export default function BusyBox() {
	const currentPage = useRecoilValue(selectedTabState);

	switch (currentPage) {
		case 0:
			return <GeneralPage />;
		case 1:
			return <SignPage />;
		case 2:
			return <AccessibilityPage />;
		case 3:
			return <AmenitiesPage />;
		case 4:
			return <NotesPage />;
		case 5:
			return <PhotoPage />;
		default:
			return <GeneralPage />;
	}
}
