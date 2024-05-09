import { createSlice } from '@reduxjs/toolkit';
import { UserSheme } from '../types/user';

const initialState: UserSheme = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
