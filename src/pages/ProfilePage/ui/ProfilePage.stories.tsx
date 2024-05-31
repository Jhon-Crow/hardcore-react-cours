import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'page/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        // onClick: fn()
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    args: {
    },
};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Jhon',
                lastname: 'Crow',
                age: 23,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'The City',
                username: 'the_best_username_ever',
                avatar: 'https://avatars.githubusercontent.com/u/133867474?v=4',
            },
            readonly: true,
        },
    }),
];

export const Dark: Story = {
    args: {
    },
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
