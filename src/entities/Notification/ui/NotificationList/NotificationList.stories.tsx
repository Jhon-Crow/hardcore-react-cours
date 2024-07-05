import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
    title: 'shared/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
    args: {},
};
