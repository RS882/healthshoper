export interface IUser {
	/**
	 * user id
	 */
	id: string;
	/**
	 * user email
	 */
	email: string;
	/**
	 * confirmed user  mail or not
	 */
	isActivate: boolean;
};