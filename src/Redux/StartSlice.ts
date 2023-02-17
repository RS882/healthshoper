import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitysList } from '../Types/cityList';
import { RootState } from './store';


interface IStartData {
	cityList: CitysList;
	phoneNummberForCall: string;
};

const initialState: IStartData = {
	cityList: ["Berlin",
		"Hamburg",
		"München",
		"Köln",
		"Frankfurt am Main",
		"Stuttgart",
		"Düsseldorf",
		"Dortmund",
		"Essen",
		"Leipzig",
		"Bremen",
		"Dresden",
		"Hannover",
		"Nürnberg",
		"Duisburg",
		"Bochum",
		"Wuppertal",
		"Bielefeld",
		"Bonn",
		"Münster",
		"Karlsruhe",
		"Mannheim",
		"Augsburg",
		"Wiesbaden",
		"Gelsenkirchen",
		"Mönchengladbach",
		"Braunschweig",
		"Chemnitz",
		"Kiel",
		"Aachen",
		"Halle",
		"Magdeburg",
		"Freiburg im Breisgau",
		"Krefeld",
		"Lübeck",
		"Oberhausen",
		"Erfurt",
		"Mainz",
		"Rostock",
		"Kassel",
		"Hagen",
		"Hamm",
		"Saarbrücken",
		"Mülheim an der Ruhr",
		"Potsdam",
		"Ludwigshafen am Rhein",
		"Oldenburg",
		"Leverkusen",
		"Osnabrück",
		"Solingen",
		"Heidelberg",
		"Herne",
		"Neuss",
		"Darmstadt",
		"Paderborn",
		"Regensburg",
		"Ingolstadt",
		"Würzburg",
		"Fürth",
		"Wolfsburg",
		"Offenbach",
		"Ulm",
		"Heilbronn",
		"Pforzheim",
		"Göttingen",
		"Bottrop",
		"Trier",
		"Recklinghausen",
		"Reutlingen",
		"Bremerhaven",
		"Koblenz",
		"Bergisch Gladbach",
		"Jena",
		"Remscheid",
		"Erlangen",
		"Moers",
		"Mörs",
		"Siegen",
		"Hildesheim",
		"Salzgitter",
		"Kaiserslautern",],
	phoneNummberForCall: '012345646901',

};



export const startSlice = createSlice({
	name: 'start',
	initialState,
	reducers: {},

	// extraReducers: {},
});


export const { } = startSlice.actions;

export const selCityList = (state: RootState) => state.start.cityList;
export const selPhoneNummberForCall = (state: RootState) => state.start.phoneNummberForCall;

export default startSlice.reducer;