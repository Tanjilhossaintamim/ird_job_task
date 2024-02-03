const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  navopen: false,
  settingOpen: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavState: (state) => {
      state.navopen = !state.navopen;
    },
    setSettingMenuState: (state, action) => {
      state.settingOpen = !state.settingOpen;
    },
  },
});

export const { setNavState, setSettingMenuState } = navigationSlice.actions;
export default navigationSlice.reducer;
