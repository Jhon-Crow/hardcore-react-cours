import type {
    StateScheme, ReduxStoreWithManager, ThunkConfig, StateSchemeKey,
} from './config/StateScheme';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export {
    createReduxStore,
    StoreProvider,
    ReduxStoreWithManager,
};

export type {
    AppDispatch,
    StateScheme,
    ThunkConfig,
    StateSchemeKey,
};
