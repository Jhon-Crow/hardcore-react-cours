import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleDetailsScheme } from 'entities/Article';
import { ArticleDetailsCommentScheme } from 'pages/ArticleDetailsPage';
import { AddCommentFormScheme } from 'features/addCommentForm';
import { ArticlesPageScheme } from 'pages/AboutPage';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;

    // Асинхронные редюсеры.
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;
    articleDetailsComments?: ArticleDetailsCommentScheme;
    addCommentForm?: AddCommentFormScheme;
    articlesPage?: ArticlesPageScheme;
}

export type StateSchemaKey = keyof StateScheme;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>;
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateScheme;
}
