'use client';

import { createDropDown } from '@components/inputs/dropdown';
import { DevelopmentType } from '@t/apiResponse';
import { useMemo } from 'react';

interface Props {
	developmentTypes: DevelopmentType[];
}

export default function DevelopmentTypeDropdown({ developmentTypes }: Props) {
	var developmentTypes_copy = developmentTypes.slice();

	const mappedTypes = useMemo(
		() =>
			developmentTypes_copy
				.sort(({ order: oA }, { order: oB }) => oA - oB)
				.reduce<{ [key: string]: string }>((acc, { id, name, isDefault }) => {
					acc[id] = name;
					return acc;
				}, {}),
		[developmentTypes_copy],
	);

	const defaultId = useMemo(
		() => developmentTypes_copy.filter(({ isDefault }) => isDefault)[0].id,
		[developmentTypes_copy],
	);

	const DevelopmentTypeDropDown = useMemo(
		() =>
			createDropDown(
				defaultId,
				mappedTypes,
				({ developmentTypeId }) => developmentTypeId,
				({ developmentTypeId, ...childStop }, newId) => ({
					...childStop,
					developmentTypeId: newId,
				}),
			),
		[defaultId, mappedTypes],
	);

	return <DevelopmentTypeDropDown label="Development Type" />;
}
