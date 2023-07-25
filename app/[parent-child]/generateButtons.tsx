import { Button } from '@mui/material';
import { serverNeighbors } from '@state/serverDataState';
import { ChildStop } from '@t/apiResponse';
import { useRecoilValue } from 'recoil';

interface Props {
	current: string;
}
export default function GenerateButtons({ current }: Props) {
	const neighbor_stops: ChildStop[] = useRecoilValue(serverNeighbors);

	return (
		<div>
			{neighbor_stops.map(({ id, name }) => (
				<Button
					key={id}
					variant={current.replace('-', ':') === id ? 'contained' : 'outlined'}
					href={`${id.replace(':', '-')}`}
				>
					{name}
				</Button>
			))}
		</div>
	);
}
