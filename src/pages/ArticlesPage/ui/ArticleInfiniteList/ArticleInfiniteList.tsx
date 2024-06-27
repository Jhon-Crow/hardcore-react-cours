import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            onScrollEnd={onLoadNextPart}
        />
    );
});
