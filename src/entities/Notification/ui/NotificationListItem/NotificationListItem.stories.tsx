import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NotificationListItem } from './NotificationListItem';

const meta: Meta<typeof NotificationListItem> = {
    title: 'entities/Notification/NotificationListItem',
    component: NotificationListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof NotificationListItem>;

export const Normal: Story = {
    args: {
        item: {
            id: '1',
            title: 'title',
            description: 'description',
        },
    },
};
