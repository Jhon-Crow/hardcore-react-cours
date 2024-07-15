import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileRating> = {
    title: 'features/ProfileRating',
    component: ProfileRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Normal: Story = {
    args: {
        profileId: '1',
    },
};

Normal.decorators = [ThemeDecorator(Theme.NORMAL),
    StoreDecorator({
        user: {
            authData: {
                id: '2',
                username: 'user',
                // @ts-ignore
                roles: ['USER'],
                avatar: 'https://avatars.githubusercontent.com/u/133867474?v=4',
            },
        },
    }),
];
