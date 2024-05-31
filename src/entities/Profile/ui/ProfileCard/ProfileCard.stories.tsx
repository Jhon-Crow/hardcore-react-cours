import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';
import AvatarImg from '../../../../shared/assets/icons/user-32-32.png';

const meta: Meta<typeof ProfileCard> = {
    title: 'enteties/ProfileCard',
    component: ProfileCard,
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
type Story = StoryObj<typeof ProfileCard>;

export const Normal: Story = {
    args: {
        data: {
            first: 'Jhon',
            lastname: 'Crow',
            age: 23,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'The City',
            username: 'the_best_username_ever',
            avatar: AvatarImg,
        },
    },
};
// Normal.decorators = [
//     StoreDecorator({}),
// ];

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
// Loading.decorators = [
//     StoreDecorator({}),
// ];

export const Error: Story = {
    args: {
        error: 'true',
    },
};
// Error.decorators = [
//     StoreDecorator({}),
// ];
