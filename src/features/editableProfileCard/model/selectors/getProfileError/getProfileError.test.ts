import { StateScheme } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state as StateScheme)).toEqual('123');
    });
    test('should with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileError(state as StateScheme)).toEqual(undefined);
    });
});
