import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/index';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        // onClick: fn()
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Normal: Story = {
    args: {},
};
Normal.decorators = [
    ThemeDecorator(Theme.NORMAL),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const NoAuth: Story = {
    args: {},
};
NoAuth.decorators = [
    ThemeDecorator(Theme.NORMAL),
    StoreDecorator({}),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];
