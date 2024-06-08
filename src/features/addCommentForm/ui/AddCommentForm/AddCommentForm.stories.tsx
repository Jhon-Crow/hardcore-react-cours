import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
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
    args: {
        onSendComment: action('onSendComment'),
    },
};
Normal.decorators = [
    StoreDecorator({}),
];
