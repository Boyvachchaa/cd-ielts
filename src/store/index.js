import { configureStore } from '@reduxjs/toolkit';

import fontReducer from '../slice/fontSlice';
import authReducer from '../slice/auth';

export const store = configureStore({
  reducer: {
    font: fontReducer,
    auth: authReducer,
  },
});
