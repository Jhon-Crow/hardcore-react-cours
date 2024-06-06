import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div className={cls.skeleton}>
                <Skeleton className={cls.avatar} height={200} width={200} border="50%" />
                <Skeleton height="2.4rem" width="50%" border="0" />
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
                    theme={TextTheme.PRIMARY}
                    title={article?.title}
                    text={article?.subtitle}
                />
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
