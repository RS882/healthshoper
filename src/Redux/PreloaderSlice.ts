import { AnyAction, AsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface IPreloaderState {
	isFetching: boolean;
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>
type TypeAction = PendingAction | RejectedAction | FulfilledAction


const PENDING = `pending`;
const FULFILED = `fulfilled`;
const REJECTED = `rejected`;

type TypeActionType = typeof PENDING | typeof FULFILED | typeof REJECTED;

const initialState: IPreloaderState = {
	isFetching: false,

};

const isAction = (actionType: TypeActionType) => (action: AnyAction): action is TypeAction =>
	action.type.endsWith(`/${actionType}`);


// Reducer of the preloroder
export const preloaderSlice = createSlice({
	name: 'preloader',
	initialState,
	reducers: {
		setIsFeching: (state, action: PayloadAction<boolean>) => {
			state.isFetching = action.payload;
		},

	},
	extraReducers: (builder) => {
		builder
			.addMatcher(isAction(PENDING), (state, action) => {
				state.isFetching = true
			})
			.addMatcher(isAction(FULFILED), (state, action) => {
				state.isFetching = false;
			})
			.addMatcher(isAction(REJECTED), (state) => {
				state.isFetching = false;
			})
	}

})
export const { setIsFeching } = preloaderSlice.actions;

export const selIsFetching = (state: RootState) => state.preloader.isFetching;


export default preloaderSlice.reducer;