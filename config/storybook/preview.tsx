import type { Preview } from '@storybook/react';
import React from 'react';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import 'loki/configure-react';
import { TranslationDecorator }
    from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

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
        StoreDecorator({}),
        SuspenseDecorator,
    ],
};

export default preview;
