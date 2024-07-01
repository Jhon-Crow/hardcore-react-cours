import type { StorybookConfig } from '@storybook/react-webpack5';

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
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
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
