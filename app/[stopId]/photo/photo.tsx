'use client';

import Camera from '@components/inputs/camera';
import { modifiedDataState } from '@state/serverDataState';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export default function PhotoPage() {
	const [currentData, setCurrentData] = useRecoilState(modifiedDataState);

	const imageChangeCallback = useCallback(
		(img: string | null) => {
			if (currentData) {
				setCurrentData({
					...currentData,
					content: img ?? ''
				});
			}
		},
		[currentData, setCurrentData],
	);

	if (currentData === null) {
		return null;
	}

	const { content } = currentData;

	return <Camera initialData={content} photoCallback={imageChangeCallback} />;
}
