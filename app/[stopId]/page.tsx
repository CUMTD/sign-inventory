'use client';
import CheckBox from '@components/inputs/checkbox';
import DropDown from '@components/inputs/dropdown';
import { printCheckBox, printDropDown } from '@helpers/placeholderPrinters';
import { Typography } from '@mui/material';
import styles from './page.module.css';
import Layout from './layout';

export default function GeneralPage() {
	return (
		<Typography variant="subtitle1" component="h3">
			Last updated MM-DD-YYYY
		</Typography>
	);
}
