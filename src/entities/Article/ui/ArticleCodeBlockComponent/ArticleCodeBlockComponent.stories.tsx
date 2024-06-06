import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Normal: Story = {
    args: {},
};
