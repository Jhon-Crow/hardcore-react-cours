import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';
import { ValidateProfileError } from 'entities/Profile';

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first & last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incurrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('incurrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('incurrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
