import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Dropdown } from './Dropdown';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items = [
    { content: '1111111' },
    { content: '2222222', disabled: true },
    { content: '3333333' },
];

export const Normal: Story = {
    args: {
        trigger: 'TRIGGER',
        items,
    },
};

export const Yallow: Story = {
    args: {
        trigger: 'TRIGGER',
        items,

    },
};
Yallow.decorators = [ThemeDecorator(Theme.YALLOW)];

export const Dark: Story = {
    args: {
        trigger: 'TRIGGER',
        items,

    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled: Story = {
    args: {
        trigger: 'TRIGGER',
        items,
        readonly: true,
    },
};
Disabled.decorators = [ThemeDecorator(Theme.YALLOW)];
