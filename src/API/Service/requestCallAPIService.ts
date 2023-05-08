import { IRequestCall } from "../../Types/ARITypes";
import { instance } from "../api";

export const requestCallAPI = {
	requestCall: (data: IRequestCall): Promise<number> => instance.post<IRequestCall>(`request_call`, data)
		.then(response => response.status),
};