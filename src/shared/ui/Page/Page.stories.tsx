import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'shared/Page',
    component: Page,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Normal: Story = {
    args: {},
};
