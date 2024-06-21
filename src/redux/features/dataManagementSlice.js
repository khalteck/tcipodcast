import { createSlice } from "@reduxjs/toolkit";

// Initial state for the data management slice
const initialState = {
  infoData: null,
  allPodcasts: [],
  allImmigrantsCorner: [],
  latestEpisode: null,
};

// Creating the data management slice
export const dataManagementSlice = createSlice({
  name: "dataManagement", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    setInfoData: (state, action) => {
      state.infoData = action.payload;
    },
    setAllPodcasts: (state, action) => {
      state.allPodcasts = action.payload;
    },
    setAllImmigrantsCorner: (state, action) => {
      state.allImmigrantsCorner = action.payload;
    },
    setLatestEpisode: (state, action) => {
      state.latestEpisode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInfoData, setLatestEpisode } = dataManagementSlice.actions;

// Exporting the reducer to be used in the store configuration
export default dataManagementSlice.reducer;
