import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '@/features/editableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const data = {
    first: 'Test',
    lastname: 'Test Last',
    age: 18,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Test City',
    avatar: '',
    username: 'Test Username',
};

const rating = [
    {
        id: '1',
        rate: 5,
        feedback: 'Дефолтный мэн',
        userId: '1',
        profileId: '1',
    },
];

const meta = {
    title: 'page/ProfilePage',
    component: ProfilePage,
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'GET',
                status: 200,
                response: rating,
            },
        ],
    },

    // tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            profile: {
                form: data,
                data,
                readonly: true,
                isLoading: false,
            },
        }),
    ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const withErrors: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            // scroll: { scrollSave: {} },
            profile: {
                form: {
                    first: '',
                    lastname: '',
                    age: undefined,
                    country: undefined,
                    currency: Currency.RUB,
                    avatar: '',
                    username: 'ErrorUser',
                },
                validateErrors: [
                    ValidateProfileError.INCORRECT_USER_DATA,
                    ValidateProfileError.INCORRECT_COUNTRY,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        }),
    ],
};
