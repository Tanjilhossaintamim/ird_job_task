import api from "../api/api";
import apiSlice from "../slices/apiSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    apiFeature: apiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
