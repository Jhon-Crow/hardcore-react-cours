import { Dispatch } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

const data = {
    id: '1',
    title: 'js',
};

describe('fetchArticleById.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateScheme;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        // @ts-ignore
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login(rejected)', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        // @ts-ignore
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
