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
    setInitialImmigrantsCorner: (state, action) => {
      state.allImmigrantsCorner = action.payload;
    },
    setNextImmigrantsCorner: (state, action) => {
      state.allImmigrantsCorner = [
        ...state.allImmigrantsCorner,
        ...action.payload,
      ];
    },
    setInitialPodcasts: (state, action) => {
      state.allPodcasts = action.payload;
    },
    setNextPodcasts: (state, action) => {
      state.allPodcasts = [...state.allPodcasts, ...action.payload];
    },
    setLatestEpisode: (state, action) => {
      state.latestEpisode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setInfoData,
  setLatestEpisode,
  setInitialImmigrantsCorner,
  setNextImmigrantsCorner,
  setInitialPodcasts,
  setNextPodcasts,
} = dataManagementSlice.actions;

// Exporting the reducer to be used in the store configuration
export default dataManagementSlice.reducer;
