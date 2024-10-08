import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { Article, ArticleListItem, ArticleView } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ArticleRecommendationsList.module.scss';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(4);

        if (isLoading || error || !articles) {
            console.log(error);
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="1.4rem"
                className={classNames('', {}, [className])}
            >
                <Text size={TextSize.L} title={t('Рекомендации')} />
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
                            key={article.id}
                        />
                    ))}
                </HStack>
            </VStack>
        );
    },
);
