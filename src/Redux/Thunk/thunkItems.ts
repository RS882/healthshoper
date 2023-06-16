import { getItems } from "../../API/Service/itemSrvice/getItems";
import { createAppAsyncThunk } from "./ThunkFunction";

export const getItemsWithLimit = createAppAsyncThunk(
	`items/getProducts`,
	async (count: number, { rejectWithValue }) => {
		const res = await getItems.getItems(count)
			.catch(reject => rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);

export const getCategoies = createAppAsyncThunk(
	`items/getProductsCategories`,
	async (any, { rejectWithValue }) => {
		const res = await getItems.getAllCategorie()
			.catch(reject => rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);