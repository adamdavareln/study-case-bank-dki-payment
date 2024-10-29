import convertMoney from "@/helpers/utils/convertMoney";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedAmount: null,
	finalAmount: null,
};

export const topup = createSlice({
	name: "topup",
	initialState,
	reducers: {
		setFinalAmount: (state, action) => {
			state.finalAmount = convertMoney(action.payload);
		},
		setSelectedAmount: (state, action) => {
			state.selectedAmount = action.payload;
		},
	},
});

export const { setFinalAmount, setSelectedAmount } = topup.actions;

export default topup.reducer;
