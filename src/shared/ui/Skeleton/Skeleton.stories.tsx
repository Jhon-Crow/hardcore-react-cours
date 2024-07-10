import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        border: '0',
        height: '10rem',
        width: '100vw',
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        height: '5rem',
        width: '5rem',
    },
};

export const NormalDark: Story = {
    args: {
        border: '0',
        height: '10rem',
        width: '100vw',
    },
};
NormalDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
export const CircleDark: Story = {
    args: {
        border: '50%',
        height: '5rem',
        width: '5rem',
    },
};
CircleDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const NormalYallow: Story = {
    args: {
        border: '0',
        height: '10rem',
        width: '100vw',
    },
};
NormalYallow.decorators = [
    ThemeDecorator(Theme.YALLOW),
];
export const CircleYallow: Story = {
    args: {
        border: '50%',
        height: '5rem',
        width: '5rem',
    },
};
CircleYallow.decorators = [
    ThemeDecorator(Theme.YALLOW),
];
