import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedCategory: 0,
  selectedSubCategory: 0,
  doaNo: 0,
  doas: [],
  selectedCategoryName: "Dua's-importance",
};
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload.cat_id;
      state.selectedCategoryName = action.payload.cat_name;
      state.doaNo = 0;
      state.selectedSubCategory = 0;
    },
    selectSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload.id;
      state.doas = action.payload.doas.filter(
        (doa) => doa.subcat_id == action.payload.id
      );
    },
    selectDoaNo: (state, action) => {
      state.doaNo = action.payload;
    },
  },
});

export const { selectCategory, selectSubCategory, selectDoaNo } =
  apiSlice.actions;
export default apiSlice.reducer;
