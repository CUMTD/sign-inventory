'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function BackButton() {
	const router = useRouter();

	function goBack() {
		router.push('/');
	}

	return (
		<Button sx={{ justifyContent: 'left' }} startIcon={<ArrowBackIcon />} onClick={goBack}>
			back to search
		</Button>
	);

}
