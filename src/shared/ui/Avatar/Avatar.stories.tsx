import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from '../../assets/icons/user-32-32.png';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {

    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 50,
        radius: 20,
        src: AvatarImg,
    },
};

export const Circle: Story = {
    args: {
        size: 50,
        radius: 50,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 20,
        radius: 20,
        src: AvatarImg,
    },
};
