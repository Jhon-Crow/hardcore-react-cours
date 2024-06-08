import 'app/styles/index.scss';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore, StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: ReducersList,
) => (StoryComponent: React.FC) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
