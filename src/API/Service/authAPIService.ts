
import { APIUserLoginModel } from "../../Models/ILoginUserModel";
import { UserResponsModel } from "../../Models/respons/userResponsModel";
import { checkAuthInstance, instance } from "../api";



export const authAPI = {
	login: (loginData: APIUserLoginModel): Promise<UserResponsModel> =>
		instance.post<UserResponsModel>(`/auth/login`, loginData)
			.then(res => {

				return res.data
			}),

	registration: (regData: APIUserLoginModel): Promise<UserResponsModel> =>
		instance.post<UserResponsModel>(`/auth/registration`, regData)
			.then(res => {
				return res.data
			}),

	logout: (): Promise<number> => instance.post(`/auth/logout`)
		.then(res => res.status),

	refresh: (): Promise<UserResponsModel> =>
		checkAuthInstance.get<UserResponsModel>(`/auth/refresh`)
			.then(res => {
				return res.data
			}),

};