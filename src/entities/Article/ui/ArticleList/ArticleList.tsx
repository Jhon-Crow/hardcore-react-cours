import React, {
    CSSProperties,
    forwardRef,
    HTMLAttributeAnchorTarget,
    HTMLAttributes,
    LegacyRef,
    memo,
    ReactNode,
} from 'react';
import { GridComponents, Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';

/* eslint-disable react/no-unstable-nested-components */

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onScrollEnd?: () => void;
}

interface ListProps extends HTMLAttributes<HTMLDivElement> {}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 15 : 2)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

const Item = (article: Article, view: ArticleView, key: number) => () => (
    <ArticleListItem
        data-testid="ArticleListItem"
        article={article}
        view={view}
        key={key}
    />
);

const ItemWrapper = ({ children, ...props }: { children: ReactNode }) => (
    <div
        {...props}
        style={{
            display: 'flex',
            flex: 1,
            padding: '1rem 1rem',
            gap: 8,
        }}
    >
        {children}
    </div>
);

const gridComponents: GridComponents<any> = {
    List: forwardRef(
        (
            {
                style,
                children,
                ...props
            }: { style?: CSSProperties; children?: ReactNode },
            ref: LegacyRef<HTMLDivElement>,
        ) => (
            <div
                ref={ref}
                {...props}
                className={cls.itemWrapper}
                style={{
                    ...style,
                }}
            >
                {children}
            </div>
        ),
    ),
    Item: ({ children, ...props }: { children?: ReactNode }) => (
        <div {...props}>{children}</div>
    ),
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onScrollEnd,
    } = props;
    // const dispatch = useAppDispatch();

    // const loadMore = useCallback(() => {
    //     dispatch(fetchNextArticlesPage());
    // }, [dispatch]);

    if (isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {getSkeletons(view)}
            </div>
        );
    }

    if (view === ArticleView.BIG) {
        return (
            <div data-testid="ArticleList">
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Virtuoso
                        data={articles}
                        useWindowScroll
                        endReached={onScrollEnd}
                        increaseViewportBy={2}
                        itemContent={(index, article) => (
                            <ArticleListItem
                                target={target}
                                article={article}
                                view={view}
                                key={article.id}
                            />
                        )}
                    />
                </div>
                {isLoading && <>{getSkeletons(view)}</>}
            </div>
        );
    }
    return (
        <div data-testid="ArticleList">
            <VirtuosoGrid
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
                style={{ height: '100%' }}
                data={articles}
                components={gridComponents}
                endReached={onScrollEnd}
                useWindowScroll
                itemContent={(index) => (
                    <ItemWrapper key={index}>
                        <ArticleListItem
                            target={target}
                            article={articles[index]}
                            view={view}
                            key={articles[index].id}
                        />
                    </ItemWrapper>
                )}
            />
            {isLoading && (
                <div className={cls.loader}>
                    <Loader />
                </div>
            )}
        </div>
    );
});
