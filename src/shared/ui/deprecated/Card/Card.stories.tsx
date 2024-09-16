import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
    args: {
        children: <Text title="title title" text="text text" />,
    },
};

export const Outlined: Story = {
    args: {
        theme: CardTheme.OUTLINED,
        children: <Text title="title title" text="text text" />,
    },
};
