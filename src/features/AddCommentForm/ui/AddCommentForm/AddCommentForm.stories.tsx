import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'shared/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {
    args: {},
};
