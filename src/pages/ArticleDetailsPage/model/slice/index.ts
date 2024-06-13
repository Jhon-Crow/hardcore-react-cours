import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice';
import {
    articleDetailsRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
