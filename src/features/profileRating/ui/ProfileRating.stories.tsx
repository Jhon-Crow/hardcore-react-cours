import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ProfileRating from './ProfileRating';

const meta: Meta<typeof ProfileRating> = {
    title: 'shared/ProfileRating',
    component: ProfileRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Normal: Story = {
    args: {},
};
