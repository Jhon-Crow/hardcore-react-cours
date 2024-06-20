import { useTranslation } from 'react-i18next';
import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Virtuoso } from 'react-virtuoso';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onScrollEnd?: () => void;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 15 : 4)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();

    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onScrollEnd,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            article={article}
            view={view}
            key={article.id}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <Text size={TextSize.L} title={t('Статьи не найдены')} />
        );
    }

    return (
        <div>
            <Virtuoso
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                // style={{ height: '68vh' }} // высота контейнера списка
                // style={{ height: '39.25rem' }} // высота контейнера списка
                totalCount={articles.length}
                useWindowScroll
                endReached={onScrollEnd}
                overscan={view === ArticleView.BIG ? 4 : 10} // количество элементов, рендеримых за пределами видимой области
                data={articles} // массив данных для списка
                // itemContent={renderArticle}
                itemContent={(index, article) => (
                // Рендер каждого элемента списка
                    <ArticleListItem
                        target={target}
                        article={article}
                        view={view}
                        // key={index}
                        key={article.id}
                    />
                )}
            />
            {isLoading && getSkeletons(view)}
        </div>
        //
        // <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        //     {articles.length
        //         ? articles.map(renderArticle)
        //         : null}
        //     {isLoading && getSkeletons(view)}
        // </div>
    );
});
