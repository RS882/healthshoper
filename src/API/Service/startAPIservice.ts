import { ICityList, IPhoneNumber } from "../../Types/ARITypes";
import { instance } from "../api";


export const startAPI = {
	phoneNumber: (): Promise<IPhoneNumber> => instance.get<IPhoneNumber>(`phone_number`)
		.then(res => res.data),
	cityList: (): Promise<ICityList> => instance.get<ICityList>(`citys_list`)
		.then(res => res.data),
};