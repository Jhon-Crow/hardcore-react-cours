import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import React, { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
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
            <VStack gap="1rem">
                <Skeleton className={cls.avatar} height={200} width={200} border="50%" />
                <Skeleton height="2rem" width="50%" border="0" />
                <Skeleton height="1.5rem" width="95%" border="0" />
                <Skeleton height="10rem" width="100%" border="0" />
                <Skeleton height="10rem" width="100%" border="0" />
            </VStack>
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
                <HStack align="center" gap=".2rem">
                    <Icon Svg={EyeIcon} />
                    <Text text={`${article?.views}`} />
                </HStack>
                <HStack align="center" gap=".2rem">
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </HStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack max={false} gap="1rem" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
});
