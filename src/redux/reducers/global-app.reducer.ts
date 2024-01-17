import { createSlice, } from "@reduxjs/toolkit";

interface GlobalAppReducerDefaultState { }

const initialState: GlobalAppReducerDefaultState = {};

const globalAppReducer = createSlice({
	initialState,
	name: "globalAppReducer",
	reducers: {},
});

export default globalAppReducer.reducer;
