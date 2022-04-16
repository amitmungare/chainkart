import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
