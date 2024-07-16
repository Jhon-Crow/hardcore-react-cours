import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
    args: {
        children: 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    parameters: {\n'
            + '        layout: \'centered\',\n'
            + '    },\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {},\n'
            + '    args: {},\n'
            + '};',
    },
};

export const CodeDark: Story = {
    args: {
        children: 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    parameters: {\n'
            + '        layout: \'centered\',\n'
            + '    },\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {},\n'
            + '    args: {},\n'
            + '};',
    },
};

CodeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CodeYallow: Story = {
    args: {
        children: 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    parameters: {\n'
            + '        layout: \'centered\',\n'
            + '    },\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {},\n'
            + '    args: {},\n'
            + '};',
    },
};

CodeYallow.decorators = [ThemeDecorator(Theme.YALLOW)];
