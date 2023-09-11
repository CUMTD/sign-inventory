'use client';

import { createDropDown } from '@components/inputs/dropdown';
import { PoleType } from '@t/apiResponse';
import { useMemo } from 'react';

interface Props {
	poleTypes: PoleType[];
}

export default function PoleTypeDropdown({ poleTypes }: Props) {
	var poleTypes_copy = poleTypes.slice();

	const mappedTypes = useMemo(
		() =>
			poleTypes_copy
				.sort(({ order: oA }, { order: oB }) => oA - oB)
				.reduce<{ [key: string]: string }>((acc, { id, name }) => {
					acc[id] = name;
					return acc;
				}, {}),
		[poleTypes_copy],
	);

	const defaultId = useMemo(() => poleTypes_copy.filter(({ isDefault }) => isDefault)[0].id, [poleTypes_copy]);
	const PoleTypeDropDown = useMemo(
		() =>
			createDropDown(
				defaultId,
				mappedTypes,
				({ sign: { poleTypeId } }) => poleTypeId,
				({ sign, ...childStop }, newId) => ({
					...childStop,
					sign: {
						...sign,
						poleTypeId: newId,
						poleType: poleTypes_copy.filter(({ id }) => id === newId)[0],
					},
				}),
			),
		[defaultId, mappedTypes, poleTypes_copy],
	);

	return <PoleTypeDropDown label="Pole Type" />;
}
