import { IconButton } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './authBox.module.css';

export default function AuthBox() {
	const { data: session } = useSession({ required: true });

	if (session?.user) {
		return (
			<>
				<p className={styles.userName}>{session ? `${session?.user?.name}` : ''}</p>

				<IconButton color="error" size="small" onClick={() => signOut()}>
					<LogoutIcon />
				</IconButton>
			</>
		);
	} else {
		return null;
	}
}
