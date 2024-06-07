import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import React, { memo, useCallback, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const {
        className,
        id,
    } = props;

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent block={block} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div className={cls.skeleton}>
                <Skeleton className={cls.avatar} height={200} width={200} border="50%" />
                <Skeleton height="2rem" width="50%" border="0" />
                <Skeleton height="1.5rem" width="95%" border="0" />
                <Skeleton height="10rem" width="100%" border="0" />
                <Skeleton height="10rem" width="100%" border="0" />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={`Произошла ошибка при попытке загрузить статью (id: ${id})`}
            />
        );
    } else {
        content = (
            <>
                <Avatar
                    src={article?.img}
                    size={200}
                    radius={100}
                    className={cls.avatar}
                />
                <Text
                    className={cls.title}
                    theme={TextTheme.PRIMARY}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.indicatorWrapper}>
                    <Icon Svg={EyeIcon} />
                    <Text text={`${article?.views}`} />
                </div>
                <div className={cls.indicatorWrapper}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
