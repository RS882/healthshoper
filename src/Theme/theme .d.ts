import '@mui/material/styles';
import '@mui/material/AppBar';


interface themeColors {
	blue1: React.CSSProperties['color'];
	blue2: React.CSSProperties['color'];
	blue3: React.CSSProperties['color'];
	greenBlue: React.CSSProperties['color'];
	yellow: React.CSSProperties['color'];
	red: React.CSSProperties['color'];
	grayBlue: React.CSSProperties['color'];
	grayBlue1: React.CSSProperties['color'];
	grayLine: React.CSSProperties['color'];
	blueHover: React.CSSProperties['color'];
	white: React.CSSProperties['color'];
	black: React.CSSProperties['color'];
};
interface themeBgColors {
	darkBlue: React.CSSProperties['color'];
	lichtBlue: React.CSSProperties['color'];
	blueHeaderBg: React.CSSProperties['color'];
};
interface themeHandeln {
	colors: themeColors;
	bgColors: themeBgColors;
};



declare module '@mui/material/styles' {
	export interface Palette {
		greyblue: Palette['primary'];
		darkBlue: Palette['primary'];
	}
	export interface PaletteOptions {
		greyblue: PaletteOptions['primary'];
		darkBlue: PaletteOptions['primary'];
	}
	export interface ThemeOptions extends themeHandeln { }

	export interface Theme extends themeHandeln { }

	export interface BreakpointOverrides {
		xs: false; // removes the `xs` breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;
		mobile: true; // adds the `mobile` breakpoint
		tablet: true;
		laptop: true;
		desktop: true;
		maxWidth: true;
	}
};

// declare module '@mui/system' {
// 	interface BreakpointOverrides {
// 		xs: false; // removes the `xs` breakpoint
// 		sm: false;
// 		md: false;
// 		lg: false;
// 		xl: false;
// 		mobile: true; // adds the `mobile` breakpoint
// 		tablet: true;
// 		laptop: true;
// 		desktop: true;
// 		maxWidth: true;
// 	}
// }

declare module '@mui/material/AppBar' {
	export interface AppBarPropsColorOverrides {
		darkBlue: true;
	}
};





