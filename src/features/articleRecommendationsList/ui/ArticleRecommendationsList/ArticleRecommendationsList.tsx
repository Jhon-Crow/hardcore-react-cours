import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from 'entities/Article';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import cls from './ArticleRecommendationsList.module.scss';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationsList(4);

    if (isLoading || error) {
        console.log(error);
        return null;
    }

    return (
        <VStack gap="1.4rem" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендации')}
            />
            <HStack
                gap="2.4rem"
                className={cls.ArticleRecommendationsList}
                justify="center"
            >
                {articles.map((article: Article) => (
                    <ArticleListItem
                        target="_blank"
                        article={article}
                        view={ArticleView.SMALL}
                        key={articles.id}
                    />
                ))}
            </HStack>
        </VStack>
    );
});
