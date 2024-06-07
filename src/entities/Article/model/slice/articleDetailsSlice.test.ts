import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsScheme } from '../types/articleDetailsScheme';

describe('articleSlice.test', () => {
    const data = {
        id: '1',
        title: 'js',
    };

    test('article service pending', () => {
        const state: DeepPartial<ArticleDetailsScheme> = {
            isLoading: false,
            error: 'error',
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsScheme,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('article service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsScheme> = {
            isLoading: true,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsScheme,
            // @ts-ignore
            fetchArticleById.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });
});
