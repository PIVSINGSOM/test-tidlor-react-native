import {configureStore} from '@reduxjs/toolkit';
import memberSlice from '../reducers/member';
const store = configureStore({
  reducer: {
    member: memberSlice,
  },
});

export default store;
