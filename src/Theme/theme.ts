import { createTheme } from '@mui/material/styles';



export const themeDate = createTheme({
	colors: {
		blue1: '#004C93',
		blue2: '#1061AB',
		blue3: '#2B7BC6',
		greenBlue: '#3BB9B8',
		yellow: '#FFD600',
		red: '#EA1649',
		grayBlue: '#B0C0C9',
		grayBlue1: '#99A3A9',
		grayLine: '#E0E6EC',
		blueHover: '#53B7FF',

		white: '#fff',
		black: '#000',
	},
	bgColors: {
		darkBlue: '#E1EEFB',
		lichtBlue: '#F3F9FF',
		blueHeaderBg: '#F1F8FF',
	},
	typography: {
		fontFamily: `'Montserrat', sans-serif`,
	},

	// xs, extra-small: 0px
	// sm, small: 600px
	// md, medium: 900px
	// lg, large: 1200px
	// xl, extra-large: 1536px


	breakpoints: {
		values: {
			mobile: 0,
			tablet: 767,
			laptop: 1021,
			desktop: 1221,
			maxWidth: 1572,
		},
	},
	palette: {
		primary: {
			main: '#1061AB',
			light: '#2B7BC6',
			dark: '#004C93',

		},
		secondary: {
			main: '#3BB9B8',
		},
		error: {
			main: '#EA1649',
		},
		warning: {
			main: '#FFD600',
		},
		greyblue: {
			main: '#B0C0C9',
			dark: '#99A3A9',
		},
		darkBlue: {
			main: '#E1EEFB',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});