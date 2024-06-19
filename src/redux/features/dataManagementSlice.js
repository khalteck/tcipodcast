import { createSlice } from "@reduxjs/toolkit";

// Initial state for the data management slice
const initialState = {
  infoData: null,
};

// Creating the data management slice
export const dataManagementSlice = createSlice({
  name: "dataManagement", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to set all image data
    setInfoData: (state, action) => {
      state.infoData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInfoData } = dataManagementSlice.actions;

// Exporting the reducer to be used in the store configuration
export default dataManagementSlice.reducer;
