import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'shared/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    args: {},
};
