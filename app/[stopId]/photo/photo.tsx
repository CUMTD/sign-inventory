'use client';

import Image from 'next/image';
import { Stack } from '@mui/material';
import styles from '../page.module.css';
import { useRecoilValue } from 'recoil';
import { selectedStopIdSelector } from '@state/serverDataState';
const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

export default function PhotoPage() {
	const fullStopId = useRecoilValue(selectedStopIdSelector);

	return (
		<>
			<Stack spacing={3}>
				<div className={styles.subSection}>
					<label>Upload a new photo:</label>
					<input type="file" accept="image/jpeg" />
					<div style={{ position: 'relative', minWidth: '50vw', minHeight: '50vh' }}>
						<Image
							src={`${ENDPOINT}/child-stop/${fullStopId}`}
							fill={true}
							alt="No image yet!"
							// width={719}
							// height={1279}
							style={{ objectFit: 'contain' }}
						/>
					</div>
				</div>
			</Stack>
		</>
	);
}
