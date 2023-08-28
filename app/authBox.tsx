import { Button, IconButton } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
export default function AuthBox() {
	const { data: session } = useSession({ required: true });

	if (session?.user) {
		return (
			<>
				<p
					style={{
						letterSpacing: '1px',
						fontFamily: 'monospace',
						textTransform: 'uppercase',
					}}
				>
					{session?.user?.name}
				</p>

				<IconButton color="error" size="small" onClick={() => signOut()}>
					<LogoutIcon />
				</IconButton>
			</>
		);
	} else {
		return null;
	}
}
