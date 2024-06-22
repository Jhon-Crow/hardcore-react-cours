
import {ArticleListItem} from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import {ArticleListItemSkeleton} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import {fetchNextArticlesPage} from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import React, {
    CSSProperties,
    forwardRef,
    HTMLAttributeAnchorTarget,
    HTMLAttributes, LegacyRef,
    memo,
    ReactNode,
    useCallback,
} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from "react-redux";
import {GridComponents, Virtuoso, VirtuosoGrid} from 'react-virtuoso';
import {classNames} from 'shared/lib/classNames/classNames';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Loader} from "shared/ui/Loader/Loader";
import {Article, ArticleView} from '../../model/types/article';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onScrollEnd?: () => void;
}

interface ListProps extends HTMLAttributes<HTMLDivElement> {
}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 15 : 2)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton key={index} view={view}/>
    ));


const Item = (article: Article, view: ArticleView, key: number) => () => (
    <ArticleListItem
        article={article}
        view={view}
        key={key}
    />
);

const ItemWrapper = ({ children, ...props }: { children: ReactNode}) => (
    <div
        {...props}
        style={{
            display: "flex",
            flex: 1,
            padding: "1rem 1rem",
            gap: 8,
        }}
    >
        {children}
    </div>
);

const gridComponents: GridComponents<any> = {
    List: forwardRef(({ style, children, ...props }: {style?: CSSProperties, children?: ReactNode}, ref: LegacyRef<HTMLDivElement> ) => (
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
    )),
    Item: ({ children, ...props }: {children?: ReactNode}) => (
        <div
            {...props}
        >
            {children}
        </div>
    )
}

export const ArticleList = memo((props: ArticleListProps) => {

    const {t} = useTranslation();

    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onScrollEnd,
    } = props;
    const dispatch = useAppDispatch();


//    const { t } = useTranslation();

//    const isBig = view === ArticleView.BIG;
//    const itemsPerRow = isBig ? 1 : 3;
//    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

//    const rowRender = ({
//        index, isScrolling, key, style,
//    }: ListRowProps) => {
//        const items = [];
//        const fromIndex = index * itemsPerRow;
//        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

//        for (let i = fromIndex; i < toIndex; i += 1) {
  //          items.push(
//                <ArticleListItem
    //                target={target}
  //                  article={articles[i]}
//                    view={view}
      //              key={`str${i}`}
    //                className={cls.card}
  //              />,
//            );
//        }

//        return (
//            <div
//                key={key}
//                style={style}
//                className={cls.row}
//            >
//                {items}
//            </div>
//        );
//    };

    // const renderArticle = (article: Article) => (
    // <ArticleListItem
    //     target={target}
    //     article={article}
    //     view={view}
    //     key={article.id}
    // />
    // );


    const loadMore = useCallback((_) => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    if (isLoading && !articles.length) {
        return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{getSkeletons(view)}</div>;
    }

    if (view === ArticleView.BIG) {
        return (
            <div>
                <div
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    <Virtuoso
                        data={articles}
                        useWindowScroll
                        endReached={loadMore}
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
                {isLoading && (<>{getSkeletons(view)}</>)}
            </div>
        );
    }
    return (
        <div>
            <VirtuosoGrid
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                style={{height: '100%'}}
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
            {isLoading && (<div className={cls.loader}><Loader/></div>)}
        </div>

    //    <WindowScroller
  //          onScroll={() => console.log('scroll')}
     //       scrollElement={document.getElementById(PAGE_ID) as Element}
   //     >
     //       {({
   //             width,
         //       height,
       //         registerChild,
     //           onChildScroll,
        //        scrollTop,
      //          isScrolling,
    //        }) => (
       //         <div
     //               ref={registerChild}
   //                 className={classNames(cls.ArticleList, {}, [className, cls[view]])}
       //         >
     //               <List
   //                     height={height ?? 700}
      //                  rowCount={rowCount}
    //                    rowHeight={isBig ? 700 : 330}
  //                      rowRenderer={rowRender}
              //          width={width}
            //            onScroll={onChildScroll}
          //              scrollTop={scrollTop}
        //                autoHeight
      //              />
    //                {isLoading && getSkeletons(view)}
    //            </div>
    //        )}
    //    </WindowScroller>

    // <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //     {articles.length
    //         ? articles.map(renderArticle)
    //         : null}
    //     {isLoading && getSkeletons(view)}
    // </div>

    );
});
