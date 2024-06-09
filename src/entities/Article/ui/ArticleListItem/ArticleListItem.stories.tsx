import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'shared/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Normal: Story = {
    args: {},
};
