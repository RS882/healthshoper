import { AxiosResponse } from "axios";
import { IItem } from "../../../Models/item/itemModel";
import { instanceItem } from "../../itemApi";
import { ICategories } from "../../../Models/item/categoieModel";


export const getItems = {
	getItemByID: async (id: number): Promise<IItem> => {
		const res: AxiosResponse<IItem, any> = await instanceItem.get<IItem>(`/${id}`);
		return res.data;
	},
	getItems: async (limit = 10): Promise<IItem[]> => {
		const res: AxiosResponse<IItem[], any> = await instanceItem.get<IItem[]>(`?limit=${limit}`);
		return res.data;
	},
	getAllItems: async (): Promise<IItem[]> => {
		const res: AxiosResponse<IItem[], any> = await instanceItem.get<IItem[]>(`/`);
		return res.data;
	},
	getItemByCategorie: async (categorieName: string): Promise<IItem[]> => {
		const res: AxiosResponse<IItem[], any> = await instanceItem.get<IItem[]>(`/category/${categorieName}`);
		return res.data;
	},
	getAllCategorie: async (): Promise<ICategories> => {
		const res: AxiosResponse<ICategories, any> = await instanceItem.get<ICategories>(`/categories`);
		return res.data;
	},
}