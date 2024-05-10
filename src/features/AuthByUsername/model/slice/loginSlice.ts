import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginScheme } from '../types/loginScheme';

const initialState: LoginScheme = {
    isLoading: false,
    password: '',
    username: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
