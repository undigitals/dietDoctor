import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  data: string[];
};

const initialState: initialState = {
  data: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.data.unshift(action.payload);
    },
  },
});

export default counterSlice.reducer;

export const { add } = counterSlice.actions;
