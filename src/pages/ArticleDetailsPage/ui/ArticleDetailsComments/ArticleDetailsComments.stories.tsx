import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'page/ArticleDetails/ArticleDetailsComments',
    component: ArticleDetailsComments,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

const comments = {
    ids: ['1', '2', '3'],
    entities: {
        1: {
            id: '1',
            text: 'Test comment 1',
            user: {
                id: '1',
                username: 'default user 1',
                avatar: '',
                role: 'USER',
            },
        },
        2: {
            id: '2',
            text: 'Test comment 2',
            user: {
                id: '2',
                username: 'default user 2',
                avatar: '',
                role: 'USER',
            },
        },
        3: {
            id: '3',
            text: 'Test comment 3',
            user: {
                id: '1',
                username: 'default user 1',
                avatar: '',
                role: 'USER',
            },
        },
    },
};

export const Normal: Story = {
    args: {
        id: '1',
    },
};
Normal.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments,
        },
    }),
];
