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
			fontWeight: 800
		},
		h2: {
			fontWeight: 600
		},
		h3: {
			fontWeight: 600
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
					padding: 10,
					marginTop: 10,
				},
			},
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true, // no more ripple on the whole application
			},
		},

		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: '1.8rem',
				},
			},
		},

		MuiTab: {
			styleOverrides: {
				root: {
					'letterSpacing': '0.1ch',
					'fontWeight': 400,
					'padding': '2rem',
					'paddingLeft': 0,
					'fontSize': '2.3rem',
					'alignItems': 'start',
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
