import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { loadState } from '../../../shared/services/storage';

export const USERS_DATA = 'usersData';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users?limit=10');
    return response.data.map(item => ({
      ...item,
      address: item.address.city,
      company: item.company.name,
      isArchived: false
    }));
  } catch (error) {
    throw Error('Unable to fetch users');
  }
});


const initialState = loadState(USERS_DATA) ?? 
{
    users: [],
    status: 'idle',
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      cleanItems: (state) => {
			state.users = [];
		},
		deleteItem: (state, action) => {
			state.users = state.users.filter(i => i.id !== action.payload);
		},
    archiveItem: (state, action) => {
			state.users = state.users.map(i => {
        if (i.id === action.payload) {
           return {
                    ...i,
                    isArchived: true
            }
        } else {
          return i
        }
      });
		},
    unarchiveItem: (state, action) => {
			state.users = state.users.map(i => {
        if (i.id === action.payload) {
           return {
                    ...i,
                    isArchived: false
            }
        } else {
          return i
        }
      });
		},
    updateItem: (state, action) => {
			state.users = state.users.map(i => {
        if (i.id === action.payload.id) {
           return {
                    ...i,
                    ...action.payload
            }
        } else {
          return i
        }
      });
		},
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
  },
})

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
export default usersSlice;