import { StateScheme } from '@/app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle,',
        };
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateScheme)).toEqual(data);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(true);
    });
    test('should with empty state isLoading', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(false);
    });
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateScheme)).toEqual('error');
    });
});
