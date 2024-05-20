import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { $api } from 'shared/api/api';
import { createReducerManager } from './reducerManager';
import { counterReducer } from '../../../../entities/Counter/index';
import { userReducer } from '../../../../entities/User/index';
import { StateScheme } from './StateScheme';

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>,
) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
