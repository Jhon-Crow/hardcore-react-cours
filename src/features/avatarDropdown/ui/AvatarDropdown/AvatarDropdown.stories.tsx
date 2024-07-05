import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'shared/AvatarDropdown',
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
