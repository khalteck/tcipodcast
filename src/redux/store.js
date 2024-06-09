import { configureStore } from "@reduxjs/toolkit";

// Importing reducers for managing the data management state
import dataManagementReducer from "./features/dataManagementSlice";
import userReducer from "./features/userSlice";

// Importing the API slice for handling API interactions
import { firebaseApi } from "../redux/features/firebaseSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// Create the persist config for the user slice
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  // Adding reducers to the store's state
  reducer: {
    user: persistedReducer, // Reducer for managing data management state
    dataManagement: dataManagementReducer, // Reducer for managing data management state
    [firebaseApi.reducerPath]: firebaseApi.reducer, // Adding the API slice reducer, dynamically keyed by its reducer path
  },
  // Adding custom middleware to the store
  middleware: (getDefaultMiddleware) =>
    // Concatenating the default middleware with the middleware from the API slice
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

// Create the persistor
export const persistor = persistStore(store);
