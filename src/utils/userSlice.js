import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.userDetails.push(action.payload);
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
