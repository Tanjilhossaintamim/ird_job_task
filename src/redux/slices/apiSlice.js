import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedCategory: 1,
};
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = apiSlice.actions;
export default apiSlice.reducer;
