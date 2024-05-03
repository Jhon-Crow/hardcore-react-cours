import type { Preview } from '@storybook/react';
import React from 'react';
import { StyleDecorator } from './StyleDecorator/StyleDecorator';
import { ThemeDecorator } from './ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {

    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};

export default preview;
