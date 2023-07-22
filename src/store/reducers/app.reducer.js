import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {} | null,
};

export const AppSLice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    error: (state) => {
      state.loading = false;
    },
  },
});

export const actions = AppSLice.actions;

export default AppSLice.reducer;
