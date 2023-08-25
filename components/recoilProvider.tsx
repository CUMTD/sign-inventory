'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
	children: ReactNode;

}

export default function RecoilProvider({ children }: Props) {
	return <RecoilRoot>
		{children}
	</RecoilRoot>
}
