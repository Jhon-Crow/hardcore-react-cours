import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateScheme;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('to be fulfilled', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));
        const action = loginByUsername({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
