import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
            </>
        ),
    },
};
export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
            </>
        ),
    },
};
export const RowGap2rem: Story = {
    args: {
        gap: '2rem',
        children: (
            <>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
            </>
        ),
    },
};
export const ColumnGap04rem: Story = {
    args: {
        direction: 'column',
        gap: '.4rem',
        children: (
            <>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
            </>
        ),
    },
};
export const ColumnAlignEnd: Story = {
    args: {
        align: 'end',
        direction: 'column',
        children: (
            <>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
            </>
        ),
    },
};
export const JustifyEnd: Story = {
    args: {
        justify: 'end',
        children: (
            <>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
                <div>ROW</div>
            </>
        ),
    },
};
// export const Row: Story = {
//     args: {
//         children: (
//             <>
//                 <div>ROW</div>
//                 <div>ROW</div>
//                 <div>ROW</div>
//                 <div>ROW</div>
//                 <div>ROW</div>
//                 <div>ROW</div>
//             </>
//         ),
//     },
// };
