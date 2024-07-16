import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Normal: Story = {
    args: {},
};
Normal.decorators = [ThemeDecorator(Theme.NORMAL),
    StoreDecorator({
        user: { authData: { avatar: 'https://avatars.githubusercontent.com/u/133867474?v=4' } },
    }),
];
