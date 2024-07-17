import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'page/Articles/ArticlesPage',
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

Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            page: 1,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
        },

    }),
];
