import { AppBar, Toolbar } from '@mui/material';
import logo_svg from '@public/logo.svg';
import Image from 'next/image';
import AuthBox from '../authBox';
import styles from './topBar.module.css';
import ExportButton from './exportButton';

export default function TopBar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Image src={logo_svg} className={styles.logo} alt="MTD" width={90} height={40} />
				<div className={styles.toolbarButtonGroups}>
					<ExportButton />
					<AuthBox />
				</div>
			</Toolbar>
		</AppBar>
	);
}
