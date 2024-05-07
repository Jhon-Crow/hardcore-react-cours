import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        isOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Normal: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, deserunt inventore obcaecati optio quae, qui rem, rerum sapiente tenetur vero voluptatibus voluptatum? Amet corporis esse maxime numquam vitae! Aperiam commodi debitis distinctio eaque expedita explicabo impedit minus mollitia, officiis quod repudiandae, sequi. Aut blanditiis, enim ipsa itaque nobis quidem.',
    },
};
export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, deserunt inventore obcaecati optio quae, qui rem, rerum sapiente tenetur vero voluptatibus voluptatum? Amet corporis esse maxime numquam vitae! Aperiam commodi debitis distinctio eaque expedita explicabo impedit minus mollitia, officiis quod repudiandae, sequi. Aut blanditiis, enim ipsa itaque nobis quidem.',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
