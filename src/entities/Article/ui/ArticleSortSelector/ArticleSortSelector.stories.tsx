import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
    args: {},
};
