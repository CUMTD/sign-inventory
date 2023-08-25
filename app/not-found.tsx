'use client';
import { usePathname } from 'next/navigation';
import BackButton from './[stopId]/backButton';
import styles from './not-found.module.css';
export default function NotFoundPage() {
	const pathname = usePathname();
	return (
		<>
			<div style={{ padding: '3em 0 0 3em' }}>
				<BackButton />
			</div>

			<div className={styles.container}>
				<h1 className={styles.header}>404</h1>
				<h1>Page not Found</h1>
				<code>{pathname}</code>
				<a href={`mailto:developer@mtd.org?subject=Sign%20Inventory%20404%20Error%20accessing%20${pathname}`}>
					Report this error as incorrect
				</a>
			</div>
		</>
	);
}
