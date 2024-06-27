import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'shared/EditableProfileCard',
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
    args: { },
};
