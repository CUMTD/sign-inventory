'use client';

import image from '@public/bus_stop_sign.png';
import Image from 'next/image';

export default function SignImage() {
	return (
		<Image
			src={image}
			alt="logo"
			width={139}
			height={200}
			title="it's a great day to ride MTD!"
			placeholder="blur"
			priority
		/>
	);
}
