import type { Preview } from '@storybook/react';
import React from 'react';
import { StyleDecorator } from './StyleDecorator/StyleDecorator';

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
        (Story) => StyleDecorator(Story),
    ],
};

export default preview;
