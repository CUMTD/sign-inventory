import { AppBar, Container, Toolbar } from '@mui/material';
import logo_svg from '@public/logo.svg';
import Image from 'next/image';
import AuthBox from '../authBox';
import styles from './topBar.module.css';

export default function TopBar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Image src={logo_svg} className={styles.logo} alt="MTD" width={90} height={40} />
				<div className={styles.authBox}>
					<AuthBox />
				</div>
			</Toolbar>
		</AppBar>
	);
}
