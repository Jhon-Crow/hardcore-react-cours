import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article-details');

    const {
        className,
    } = props;

    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();
    const canEditArticle = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEdit = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }, [article, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                onClick={onBackToList}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('Назад к списку')}
            </Button>
            {canEditArticle && (
                <Button
                    onClick={onEdit}
                    theme={ButtonTheme.CLEAR}
                >
                    {t('Редактировать')}
                </Button>
            )}

        </div>
    );
});
