import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { RoutePath } from '@/shared/const/router';

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
        <HStack justify="between">
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

        </HStack>
    );
});
