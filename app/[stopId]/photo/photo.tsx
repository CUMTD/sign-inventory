'use client';

import Image from 'next/image';
import { Stack } from '@mui/material';
import styles from '../page.module.css';
import { useRecoilValue } from 'recoil';
import { selectedStopIdSelector } from '@state/serverDataState';
import { useState } from 'react';
const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

export default function PhotoPage() {
	const fullStopId = useRecoilValue(selectedStopIdSelector);
	const [hideImage, setHideImage] = useState(false);

	return (
		<>
			<Stack spacing={3}>
				<div className={styles.subSection}>
					<label>Upload a new photo:</label>
					<input type="file" accept="image/jpeg" />
					<div
						style={{ position: 'relative', minHeight: '30em', minWidth: '50em', display: hideImage ? 'none' : 'block' }}
					>
						<Image
							src={`${ENDPOINT}/child-stop/${fullStopId}`}
							fill={true}
							alt={`Image for ${fullStopId}`}
							className={styles.image}
							onError={() => setHideImage(true)}
						/>
					</div>
				</div>
			</Stack>
		</>
	);
}
