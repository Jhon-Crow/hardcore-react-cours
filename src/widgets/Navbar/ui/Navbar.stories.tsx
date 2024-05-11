import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/index';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
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
type Story = StoryObj<typeof Navbar>;

export const Normal: Story = {
    args: {},
};
Normal.decorators = [ThemeDecorator(Theme.NORMAL),
    StoreDecorator({}),
];

export const Auth: Story = {
    args: {},
};
Auth.decorators = [ThemeDecorator(Theme.NORMAL),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
