import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from '../slice/profileSlice';
import { ProfileScheme, ValidateProfileError } from '../types/profile';

describe('profileSlice.test', () => {
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
    test('set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('cencel edit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: '123' } };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
