import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
    args: {
        tabs: [
            { content: '1', value: '1' },
            { content: '2', value: '2' },
            { content: '3', value: '3' },
        ],
        value: '2',
        onTabClick: action('onTabClick'),
    },
};
