import type { Preview } from '@storybook/react';
import React from 'react';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import 'loki/configure-react';
import { TranslationDecorator }
    from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

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
        ThemeDecorator(Theme.NORMAL),
        RouterDecorator,
        TranslationDecorator,
    ],
};

export default preview;
