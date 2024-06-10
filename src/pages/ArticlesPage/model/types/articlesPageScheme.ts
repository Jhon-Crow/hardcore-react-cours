import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageScheme extends EntityState<Article>{
        isLoading?: boolean;
        error?: string;
        page: number;

        // pagination
        limit?: number;
        hasMore: boolean;
        view: ArticleView;
}
