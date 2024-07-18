const config: {
    stories: string[];
    framework: { name: string; options: {} };
    docs: { autodocs: boolean };
    addons: string[];
    typescript: { reactDocgen: string }
} = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        // @ts-ignore
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        '@storybook/addon-themes',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    docs: {
        autodocs: false,
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
export default config;
