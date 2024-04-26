import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config.js';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: !!1,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
