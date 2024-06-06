import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Normal: Story = {
    args: {},
};
