import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../slice/articleDetailsSlice';
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
