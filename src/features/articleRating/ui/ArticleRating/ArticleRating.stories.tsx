import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
    args: {},
};
