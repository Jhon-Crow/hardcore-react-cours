import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { counterReducer } from '../../../../entities/Counter/index';
import { userReducer } from '../../../../entities/User/index';
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    const store = configureStore<StateScheme>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    return store;
}
