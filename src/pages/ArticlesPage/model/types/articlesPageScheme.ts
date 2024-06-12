import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import { SortOrders } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageScheme extends EntityState<Article>{
        isLoading?: boolean;
        error?: string;
        page: number;

        // pagination
        limit: number;
        hasMore: boolean;

        // filters
        view: ArticleView;
        order: SortOrders;
        sort: ArticleSortField;
        search: string;
        type: ArticleType;

        _inited: boolean;
}
