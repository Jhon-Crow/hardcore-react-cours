import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsScheme } from '../types/articleDetailsScheme';

const initialState: ArticleDetailsScheme = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
