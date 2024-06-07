import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'shared/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {},
};
