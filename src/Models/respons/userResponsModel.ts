import { IUser } from "../IUser";

export interface UserResponsModel {
	/**
 * access user token
 */
	accessToken: string;
	/**
 * refresh user token
 */
	refreshToken: string;
	/**
	 * responsed user data 
	 */
	user: IUser
}