import { StateScheme } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScroll = (state: StateScheme) => state.PositionSaver.scroll;
export const getScrollPositionByPath = createSelector(
    getScroll,
    (state: StateScheme, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
