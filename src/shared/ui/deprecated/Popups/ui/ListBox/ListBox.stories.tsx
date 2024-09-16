import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [
        (Story) => (
            <div style={{ padding: '10rem' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const items = [
    { content: '1111111111', value: '1111' },
    { content: '2222222222', value: '2222', disabled: true },
    { content: '3333333333', value: '3333' },
];

export const Normal: Story = {
    args: {
        value: 'value',
        items,
    },
};
export const topLeft: Story = {
    args: {
        value: 'value',
        items,
        direction: 'top-left',
    },
};
export const bottomLeft: Story = {
    args: {
        value: 'value',
        items,
        direction: 'bottom-left',
    },
};
export const bottomRight: Story = {
    args: {
        value: 'value',
        items,
        direction: 'bottom-right',
    },
};
