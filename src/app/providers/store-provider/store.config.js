import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from '../../../entities/userCard/model/userSlice';
import profileFormSlice from '../../../entities/profileForm/model/profileFormSlice';


export const rootReducer = combineReducers({
  [usersSlice.name]: usersSlice.reducer ,
  [profileFormSlice.name]: profileFormSlice.reducer
});

export const setupStore = configureStore({
  reducer: rootReducer
});