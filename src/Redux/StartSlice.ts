import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitysList } from '../Types/cityList';
import { RootState } from './store';
import { getPhoneNumber } from './Thunk/thunkStart';


export interface IPhoneNumber {
	phoneNumber: string;
};
export interface ICityLis {
	cityList: CitysList;
};

export interface IErrorMsg {
	errorMsg: string | null;
};

export type IStartData = IPhoneNumber & ICityLis & IErrorMsg;

const initialState: IStartData = {
	errorMsg: null,
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
	phoneNumber: '012345646901',

};

const getTelNumber = createAction<IPhoneNumber | string>(getPhoneNumber.fulfilled.type);

export const startSlice = createSlice({
	name: 'start',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(getTelNumber, (state, action) => {
				if (typeof action.payload === 'string') {
					state.errorMsg = action.payload;

				} else {
					const payload = action.payload.phoneNumber!;
					state.phoneNumber = payload && payload.match(/^\d{12}$/) ? payload : state.phoneNumber;
				}

			})
	}
});


export const { } = startSlice.actions;

export const selCityList = (state: RootState) => state.start.cityList;
export const selPhoneNummberForCall = (state: RootState) => state.start.phoneNumber;

export default startSlice.reducer;