import type { Meta, StoryObj } from '@storybook/react';

import { ArticleEditPageAsync as ArticleEditPage } from './ArticleEditPage.async';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {
    args: {},
};
