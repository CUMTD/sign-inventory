import { createTheme } from '@mui/material/styles';
import { Overpass } from 'next/font/google';

const overpass = Overpass({ subsets: ['latin'] });

const theme = createTheme({
	spacing: 20,

	palette: {
		primary: {
			main: '#002f87',
		},
		secondary: {
			main: '#E91D2D',
		},
	},
	typography: {
		fontFamily: overpass.style.fontFamily,
		fontWeightRegular: 500,
		htmlFontSize: 10,
		h1: {
			fontWeight: 900,
		},
		h2: {
			fontWeight: 600,
		},
		h3: {
			fontWeight: 600,
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					padding: 60,
					marginTop: 60,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					fontFamily: overpass.style.fontFamily,

					padding: 10,
					marginTop: 10,
				},
			},
		},
		MuiButtonBase: {
			defaultProps: {
				// disableRipple: true, // no more ripple on the whole application
			},
		},
		MuiButtonGroup: {
			styleOverrides: {
				grouped: {
					width: '90%',
					justifyContent: 'left',
				},
			},
		},

		MuiTab: {
			styleOverrides: {
				root: {
					'letterSpacing': '0.1ch',
					'fontWeight': 400,
					'padding': '1.6rem',
					'paddingLeft': 0,
					'fontSize': '2.3rem',
					'alignItems': 'start',
					'minWidth': '22vw',

					'&.Mui-selected': {
						fontWeight: 700,
					},
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				indicator: {
					width: '5px',
				},
				root: {
					borderRight: 1,
					borderColor: 'divider',
					height: '100%',
				},
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					fontSize: 'xx-large',
				},
			},
		},
	},
});

export default theme;
