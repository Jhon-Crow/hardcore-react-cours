import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
    title: 'shared/Overlay',
    component: Overlay,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Normal: Story = {
    args: {},
};
