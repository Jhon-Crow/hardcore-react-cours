import type { Preview } from '@storybook/react';
import 'loki/configure-react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            layout: 'fullscreen',
        },
    },
    decorators: [
        StyleDecorator,
        // @ts-ignore
        ThemeDecorator(Theme),
        RouterDecorator,
        TranslationDecorator,
        StoreDecorator({}),
        SuspenseDecorator,
        // @ts-ignore
        withThemeByClassName({
            themes: {
                light: Theme.NORMAL,
                dark: Theme.DARK,
                yallow: Theme.YALLOW,
            },
            defaultTheme: 'dark',
        }),
    ],
};

export default preview;
