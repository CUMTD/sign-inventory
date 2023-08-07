'use client';

import { initialDataState, modifiedDataState, selectedChildStopSelector } from "@state/serverDataState";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function ServerDataStateSubscriber() {
	const setInitialDataState = useSetRecoilState(initialDataState);
	const setModifiedDataState = useSetRecoilState(modifiedDataState);
	const currentChildStop = useRecoilValue(selectedChildStopSelector);

	useEffect(() => {
		setInitialDataState(currentChildStop);
		setModifiedDataState(currentChildStop);
	}, [currentChildStop, setInitialDataState, setModifiedDataState]);

	return null;
}
