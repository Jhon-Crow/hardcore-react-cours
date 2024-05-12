import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

export function createReducerManager(initialReducers: ReducersMapObject<StateScheme>) {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state, action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
