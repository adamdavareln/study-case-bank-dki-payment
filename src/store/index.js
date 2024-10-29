import topupReducer from "./slices/topup";
import userReducer from "./slices/user";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
	return configureStore({
		reducer: {
			topup: topupReducer,
			user: userReducer,
		},
	});
};
