interface Props {
	params: {
		parent: string;
		child: string;
	}
}

export default function Page({ params: { parent, child } }: Props) {
	return <h1>Stop: {parent}:{child} - General</h1>
}
