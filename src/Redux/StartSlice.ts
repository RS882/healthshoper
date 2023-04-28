import { createAction, createSlice, } from '@reduxjs/toolkit';
import { ICityList, IPhoneNumber } from '../Types/ARITypes';

import { RootState } from './store';
import { getCitysList, getPhoneNumber } from './Thunk/thunkStart';



export interface IStartData extends IPhoneNumber, ICityList {
	isInitializationSuccess: boolean;
};

const initialState: IStartData = {

	citysList: ["Berlin",
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
	isInitializationSuccess: false,
};

const getTelNumber = createAction<IPhoneNumber>(getPhoneNumber.fulfilled.type);

const getListOfCity = createAction<ICityList>(getCitysList.fulfilled.type);

export const startSlice = createSlice({
	name: 'start',
	initialState,
	reducers: {
		сhangeAppInitialized: (state) => {
			state.isInitializationSuccess = true;
		}

	},

	extraReducers: (builder) => {
		builder
			.addCase(getTelNumber, (state, action) => {
				const payload = action.payload.phoneNumber!;
				state.phoneNumber = payload && payload.match(/^\d{12}$/) ? payload : state.phoneNumber;
			})
			.addCase(getListOfCity, (state, action) => {
				state.citysList = action.payload.citysList.length > 0 ? action.payload.citysList : state.citysList;

			})
	}
});


export const { сhangeAppInitialized } = startSlice.actions;

export const selCityList = (state: RootState) => state.start.citysList;
export const selPhoneNummberForCall = (state: RootState) => state.start.phoneNumber;
export const selInitializationSuccess = (state: RootState) => state.start.isInitializationSuccess;

export default startSlice.reducer;