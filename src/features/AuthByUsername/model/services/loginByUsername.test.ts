import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { loginByUsername, LoginError } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateScheme;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success login', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test('error login(rejected)', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.payload).toBe(LoginError.TEST_ERROR);
    // });

    let dispatch: Dispatch;
    let getState: () => StateScheme;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const action = loginByUsername({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login(rejected)', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = loginByUsername({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toBe(LoginError.TEST_ERROR);
    });
});
