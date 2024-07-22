import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PositionSaverScheme } from '../types/PositionSaverScheme';

const initialState: PositionSaverScheme = {
    scroll: {},
};

export const PositionSaverSlice = createSlice({
    name: 'PositionSaverSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: PositionSaverActions } = PositionSaverSlice;
export const { reducer: PositionSaverReducer } = PositionSaverSlice;
