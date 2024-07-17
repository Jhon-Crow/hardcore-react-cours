import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: { },
    args: { },
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Normal: Story = {
    args: {},
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
