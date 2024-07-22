import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export enum LoginError {
    TEST_ERROR = 'loginByUsername faild!',
    INCORRECT_DATA = 'incorrect data',
    SERVER_ERROR = 'servar error',
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
            throw new Error(LoginError.SERVER_ERROR);
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(LoginError.TEST_ERROR);
    }
});
