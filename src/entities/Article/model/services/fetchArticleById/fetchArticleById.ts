import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>('articleDitales/fetchArticleById', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!articleId) {
            throw new Error('fetchArticleById Failed! Id is undefined');
        }

        if (!response.data) {
            throw new Error('NO RESPONSE DATA');
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('fetch article error');
    }
});
