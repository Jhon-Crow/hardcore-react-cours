import { useTranslation } from 'react-i18next';
import React, {
    forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes, memo,
} from 'react';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
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

interface ListProps extends HTMLAttributes<HTMLDivElement> {}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 15 : 4)
    .fill(0)
    .map((_, index) => (
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

    const gridComponents = {
        List: forwardRef<HTMLDivElement, ListProps>(({ children, ...props }, ref) => (
            <div
                ref={ref}
                {...props}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '.8rem',
                    // height: '100vh',
                }}
            >
                {children}
            </div>
        )),
        Item: ({ children, ...props }: ItemProps) => (
            <div
                {...props}
                className={cls.child}
                // style={{
                //     padding: '0.5rem',
                //     // width: '33%',
                //     display: 'flex',
                //     flex: 'none',
                //     alignContent: 'stretch',
                //     boxSizing: 'border-box',
                // }}
            >
                {children}
                {isLoading && getSkeletons(view)}

            </div>
        ),
    };

    // Обертка для элемента списка
    const ItemWrapper = ({ children, ...props }: { children: React.ReactNode }) => (
        <div
            {...props}
            className={cls.itemWrapper}
            // style={{
            //     display: 'flex',
            //     flex: 1,
            //     textAlign: 'center',
            //     padding: '1rem 1rem',
            //     whiteSpace: 'nowrap',
            // }}
        >
            {children}
        </div>
    );

    if (!isLoading && !articles.length) {
        return <Text size={TextSize.L} title={t('Статьи не найдены')} />;
    }

    if (view === ArticleView.BIG) {
        return (
            <div>
                <Virtuoso
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    totalCount={articles.length}
                    useWindowScroll
                    endReached={onScrollEnd}
                    overscan={8} // количество элементов, рендеримых за пределами видимой области
                    data={articles} // массив данных для списка
                    itemContent={(index, article) => (
                        <ArticleListItem
                            target={target}
                            article={article}
                            view={view}
                            key={article.id}
                        />
                    )}
                />
                {isLoading && getSkeletons(view)}
            </div>
        );
    }
    return (
        <div>
            <VirtuosoGrid
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                style={{ height: '100vh' }}
                totalCount={articles.length}
                components={gridComponents}
                overscan={4}
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
        </div>
    );
});
