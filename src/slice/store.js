import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  number: 0
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    incrementNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    decrementNumber: (state, action) => {
      state.number = state.number - action.payload;
    }
  }
});

export const INCREMENT_ACTION_TYPE = createAction("INCREMENT_ACTION_TYPE");
export const DECREMENT_ACTION_TYPE = createAction("DECREMENT_ACTION_TYPE");

export const { incrementNumber, decrementNumber } = numberSlice.actions;

export default numberSlice.reducer;
