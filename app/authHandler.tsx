import { userLoggedInState } from '@state/authState';
import { useRecoilValue } from 'recoil';

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { DialogTitle } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthHandler() {
	const isUserLoggedIn = useRecoilValue(userLoggedInState);

	return (
		<>
			<Dialog open={!isUserLoggedIn}>
				<Flow />
			</Dialog>
		</>
	);
}

function Flow() {
	const { data: session } = useSession();
	if (session && session.user) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<Button variant="contained" onClick={() => signOut()}>
					Sign out
				</Button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<Button variant="contained" onClick={() => signIn()}>
				Sign in
			</Button>
		</>
	);
}
