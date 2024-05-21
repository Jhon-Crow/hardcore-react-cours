import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from 'entities/User';
import { LoginError } from 'features/AuthByUsername/model/services/loginByUsername';

export const fetchProfileData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', authData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(LoginError.TEST_ERROR);
        }
    },
);
