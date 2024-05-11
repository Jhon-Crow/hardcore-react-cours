import 'app/styles/index.scss';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore, StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateScheme>) => (StoryComponent: React.FC) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
