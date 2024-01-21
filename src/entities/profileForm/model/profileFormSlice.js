import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loadState } from '../../../shared/services/storage';
import { USERS_DATA } from '../../userCard/model/userSlice';

export const getUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const {users} = loadState(USERS_DATA);
    return users.find(user => user.id == id)
});

const initialState = {
    profile: [],
    status: 'idle',
    error: null
}

export const profileFormSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUserById.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getUserById.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.profile = action.payload;
        })
        .addCase(getUserById.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
  },
})

export const { actions: profileFormActions, reducer: profileFormReducer } = profileFormSlice;
export default profileFormSlice;