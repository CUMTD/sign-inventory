import { Box, Button, CircularProgress, Link, Modal, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
import styles from './exportButton.module.css';
import { getDownloadRedirect } from '@helpers/fetchDataHelpers';
import { get } from 'http';

export default function ExportButton() {
	const [open, setOpen] = useState(false);

	//setopen and start data download
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	const download_link: string = getDownloadRedirect() + '';

	return (
		<>
			{/* <a href={download_link}>hello</a> */}
			<Modal open={open}>
				<Box className={styles.box}>
					<div style={{ display: 'flex', gap: '3em', alignItems: 'center' }}>
						<CircularProgress value={100} color="primary" />
						<Typography variant="h5" component="h2">
							Collecting data for export <br />
							<Typography variant="subtitle1" component="h2">
								This may take a minute.
							</Typography>
						</Typography>
					</div>
					<Button
						variant="text"
						color="error"
						onClick={handleClose}
						sx={{ position: 'absolute', bottom: 0, right: 0, mr: 2, mb: 1 }}
					>
						Cancel
					</Button>
					{/* <Typography sx={{ mt: 2 }}>
						This may take a minute or two. Note that these fields have been omitted:
					</Typography> */}
				</Box>
			</Modal>
			<Button startIcon={<DownloadIcon />} sx={{ margin: '.5em 0' }} variant="outlined" onClick={handleOpen}>
				Export data as .csv
			</Button>
		</>
	);
}
