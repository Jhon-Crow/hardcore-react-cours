import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
    title: 'shared/NotificationButton',
    component: NotificationButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Normal: Story = {
    args: {},
};
