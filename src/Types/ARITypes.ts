import { CitysList } from "./cityList";

export interface IRequestCall {
	id?: number;
	userName: string;
	phoneNumber: string;
};

export interface IPhoneNumber {
	phoneNumber: string;
};

export interface ICityList {
	citysList: CitysList;
};