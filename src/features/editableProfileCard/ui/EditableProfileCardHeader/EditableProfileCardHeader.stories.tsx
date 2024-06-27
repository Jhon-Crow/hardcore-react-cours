import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'shared/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {
    args: {},
};
