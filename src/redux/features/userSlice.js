import { createSlice } from "@reduxjs/toolkit";

// Initial state for the data management slice
const initialState = {
  user: null,
};

// Creating the data management slice
export const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to set logged in user in state
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Reducer to remove logged in user
    removeUser: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

// Exporting the reducer to be used in the store configuration
export default userSlice.reducer;
