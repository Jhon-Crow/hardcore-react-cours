import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../slice/articleDetailsCommentSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../slice/articleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageScheme } from '../types/index';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
