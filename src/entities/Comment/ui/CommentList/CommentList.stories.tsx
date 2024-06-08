import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
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
    args: {
        comments: [
            {
                id: '1',
                text: 'hello comment 1',
                user: { id: '1', username: 'Goggie' },
            },
            {
                id: '2',
                text: 'hello comment 1',
                user: { id: '2', username: 'Joji' },
            },
            {
                id: '3',
                text: 'hello comment 1',
                user: { id: '1', username: 'Goggie' },
            },
        ],
    },
};

export const isLoading: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello comment 1',
                user: { id: '1', username: 'Goggie' },
            },
            {
                id: '2',
                text: 'hello comment 1',
                user: { id: '2', username: 'Joji' },
            },
            {
                id: '3',
                text: 'hello comment 1',
                user: { id: '1', username: 'Goggie' },
            },
        ],
        isLoading: true,
    },
};

export const Empty: Story = {
    args: {
        comments: [],
    },
};
