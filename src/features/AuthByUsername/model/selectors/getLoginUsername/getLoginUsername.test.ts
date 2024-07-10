import { StateScheme } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: '123username',
            },
        };
        expect(getLoginUsername(state as StateScheme)).toEqual('123username');
    });
    test('should with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});
