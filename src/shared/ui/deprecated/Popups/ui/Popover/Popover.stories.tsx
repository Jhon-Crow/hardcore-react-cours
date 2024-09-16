import type { Meta, StoryObj } from '@storybook/react';

import { HPopover } from './Popover';

const meta: Meta<typeof HPopover> = {
    title: 'shared/HPopover',
    component: HPopover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof HPopover>;

export const Normal: Story = {
    args: {},
};
