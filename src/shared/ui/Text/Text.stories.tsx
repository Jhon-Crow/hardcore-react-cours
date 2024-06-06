import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'TitleTitle',
        text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextText',
        theme: TextTheme.PRIMARY,
    },
};
export const PrimaryDark: Story = {
    args: {
        title: 'TitleTitle',
        text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextText',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle: Story = {
    args: {
        title: 'TitleTitle',
    },
};

export const onlyText: Story = {
    args: {
        text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextText',
    },
};

export const Error: Story = {
    args: {
        title: 'ErrorError',
        text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextText',
        theme: TextTheme.ERROR,
    },
};

export const SizeL: Story = {
    args: {
        title: 'TitleTitle',
        text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextText',
        size: TextSize.L,
    },
};
