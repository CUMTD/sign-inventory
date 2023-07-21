import RecoilProvider from "@components/recoilProvider";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function Layout({ children }: Props) {
	return <RecoilProvider>
		{children}
	</RecoilProvider>
}
