'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function BackButton() {
	const router = useRouter();

	function goBack() {
		router.push('/');
	}

	return (
		<Button style={{ justifyContent: 'left' }} size="large" startIcon={<ArrowBackIcon />} onClick={goBack}>
			back to search
		</Button>
	);
}
