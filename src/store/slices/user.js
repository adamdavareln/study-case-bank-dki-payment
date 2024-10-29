import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	phoneNumber: "",
	PIN: "",
	confirmPIN: "",
	register: {
		phoneNumber: "",
		name: "",
		birthDate: "",
		birthPlace: "",
		email: "",
	},
};

export const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		setPhoneNumber: (state, action) => {
			state.phoneNumber = action.payload;
		},
		setPIN: (state, action) => {
			state.PIN = action.payload;
		},
		setConfirmPIN: (state, action) => {
			state.confirmPIN = action.payload;
		},
		setRegisterData: (state, action) => {
			state.register[action.payload.field] = action.payload.value;
		},
	},
});

export const { setPhoneNumber, setPIN, setConfirmPIN, setRegisterData } =
	user.actions;

export default user.reducer;
