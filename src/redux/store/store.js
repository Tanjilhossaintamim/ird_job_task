import api from "../api/api";
import apiSlice from "../slices/apiSlice";
import navigationSlice from "../slices/navigationSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    apiFeature: apiSlice,
    navigation: navigationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
