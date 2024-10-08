import { StateScheme } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateScheme)).toEqual(true);
    });
    test('should with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileIsLoading(state as StateScheme)).toEqual(undefined);
    });
});
