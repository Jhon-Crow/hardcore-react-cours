import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entities/Article';
import { AddCommentFormScheme } from 'features/addCommentForm';
import { ArticlesPageScheme } from 'pages/AboutPage';
import { PositionSaverScheme } from 'widgets/Page';
import { ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage/model/types';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileScheme } from 'features/editableProfileCard';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;
    PositionSaver: PositionSaverScheme;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Асинхронные редюсеры.
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;
    addCommentForm?: AddCommentFormScheme;
    articlesPage?: ArticlesPageScheme;
    articleDetailsPage?: ArticleDetailsPageScheme;
}

export type StateSchemeKey = keyof StateScheme;
export type MountedReducers = OptionalRecord<StateSchemeKey, boolean>
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>;
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add: (key: StateSchemeKey, reducer: Reducer) => void;
    remove: (key: StateSchemeKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateScheme;
}
