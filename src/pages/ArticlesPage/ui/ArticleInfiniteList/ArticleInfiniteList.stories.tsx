import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'page/Articles/ArticleInfiniteList',
    component: ArticleInfiniteList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Normal: Story = {
    args: {},
};
