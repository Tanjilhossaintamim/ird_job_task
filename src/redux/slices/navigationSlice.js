const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  navopen: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavState: (state, action) => {
      state.navopen = !state.navopen;
    },
  },
});

export const { setNavState } = navigationSlice.actions;
export default navigationSlice.reducer;
