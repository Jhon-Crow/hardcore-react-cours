import { StateScheme } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            first: 'Jhon',
            lastname: 'Crow',
            age: 23,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'The City',
            username: 'the_best_username_ever',
            avatar: 'https://avatars.githubusercontent.com/u/133867474?v=4',
        };
        const state: DeepPartial<StateScheme> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateScheme)).toEqual(data);
    });
    test('should with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
