'use client';
import { usePathname } from 'next/navigation';
import BackButton from './[stopId]/backButton';
export default function NotFoundPage() {
	const pathname = usePathname();
	return (
		<>
			<div style={{ padding: '3em 0 0 3em' }}>
				<BackButton />
			</div>

			{/* TODO: inline css is bad */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',

					margin: 'auto',
					padding: '1vh 0',
					textAlign: 'center',
					gap: '1em',
				}}
			>
				<h1 style={{ fontSize: '700%', margin: 0 }}>404</h1>
				<h1>Page not Found</h1>
				<code>{pathname}</code>
				<a href={`mailto:developer@mtd.org?subject=Sign%20Inventory%20404%20Error%20accessing%20${pathname}`}>
					Report this error as incorrect
				</a>
			</div>
		</>
	);
}
