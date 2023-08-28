'use client';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import BackButton from './[stopId]/backButton';
import styles from './not-found.module.css';

export default function NotFoundPage() {
	const pathname = usePathname();

	// TODO: Remove inline styles
	return (
		<>
			<div style={{ padding: '3em 0 0 3em' }}>
				<BackButton />
			</div>

			<div className={styles.container}>
				<Typography variant="h1" component="h1">
					404
				</Typography>
				<Typography variant="h2" component="h2">
					Page not Found
				</Typography>

				<code>{pathname}</code>

				<Link href={`mailto:developer@mtd.org?subject=Sign%20Inventory%20404%20Error%20accessing%20${pathname}`}>
					Report this error as incorrect
				</Link>
			</div>
		</>
	);
}
