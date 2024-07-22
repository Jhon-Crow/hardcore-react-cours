import React, { useEffect } from 'react';

export function useInitialEffect(
    callback: () => void,
    dependencies?: React.DependencyList,
) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, dependencies);
}
