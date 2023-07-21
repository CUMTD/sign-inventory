'use client';

import { ReactNode, useCallback } from 'react';
import { RecoilRoot, RecoilState, SetRecoilState } from 'recoil';

interface Props {
	children: ReactNode;

}

interface PropsWithState<T> extends Props {
	initialState: T;
}

export function createRecoilProviderWithInitialState<T>(atom: RecoilState<T>) {
	return function InitialStateRecoilProvider({ children, initialState }: PropsWithState<T>) {
		const initializeState = useCallback(({ set }: { set: SetRecoilState }) => {
			set(atom, initialState);
		}, [initialState]);

		return <RecoilRoot initializeState={initializeState}>
			{children}
		</RecoilRoot>
	}
}

export default function RecoilProvider({ children }: Props) {
	return <RecoilRoot>
		{children}
	</RecoilRoot>
}
