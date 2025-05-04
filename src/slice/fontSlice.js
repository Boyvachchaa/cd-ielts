import { createSlice } from '@reduxjs/toolkit';

const fontSlice = createSlice({
  name: 'font',
  initialState: {
    sizeOption: 'medium', // default
  },
  reducers: {
    setSizeOption: (state, action) => {
      state.sizeOption = action.payload;
    }
  }
});

export const { setSizeOption } = fontSlice.actions;
export default fontSlice.reducer;