import type {
    StateScheme, ReduxStoreWithManager, ThunkConfig,
} from './config/StateScheme';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export {
    createReduxStore,
    StoreProvider,
    StateScheme,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
