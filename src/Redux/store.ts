import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import itemsReducer from "./ItemsSlice";
import startReducer from "./StartSlice";
import actionReducer from "./ActionSlice";
import errorReducer from "./ErrorSlice";
import modalReducer from "./ModalSlice";

const store = configureStore({
	reducer: {
		items: itemsReducer,
		start: startReducer,
		action: actionReducer,
		error: errorReducer,
		modal: modalReducer,
	},

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;