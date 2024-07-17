import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            user: { id: '1', username: 'joji' },
            text: 'hi bobby monn',
        },
    },
};

export const isLoading: Story = {
    args: {
        isLoading: true,
    },
};
