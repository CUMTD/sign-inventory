'use client';

import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedStopIdSelector, stopImageState } from '@state/serverDataState';
import { useCallback, useEffect, useState } from 'react';
import { fetchStopPhoto } from '@helpers/fetchDataHelpers';
import Camera from '@components/inputs/camera';

export default function PhotoPage() {
	const fullStopId = useRecoilValue(selectedStopIdSelector);
	const [stopImage, setStopImage] = useRecoilState(stopImageState);

	const imageChangeCallback = useCallback(
		(img: string | null) => {
			setStopImage(img);
		},
		[setStopImage],
	);

	useEffect(() => {
		async function updateImageFromServer() {
			const image = await fetchStopPhoto(fullStopId);
			console.log('fetched initial data', { image });
			setStopImage(image);
		}
		updateImageFromServer();
	}, [fullStopId, setStopImage]);

	useEffect(() => {
		console.count('stop image changed');
		console.log('stop image', { stopImage });
	}, [stopImage]);

	return <Camera initialData={stopImage} photoCallback={imageChangeCallback} />;
}
