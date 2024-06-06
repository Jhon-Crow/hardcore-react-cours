import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const meta: Meta<typeof ArticleTextBlockComponent> = {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Normal: Story = {
    args: {},
};
