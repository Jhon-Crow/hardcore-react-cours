import { useTranslation } from 'react-i18next';
import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ArticleView, ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;

}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();

    const {
        className,
        article,
        view,
        target,
    } = props;

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} />
                        <Text text={article.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <div className={cls.mainWrapper}>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <img src={article.img} alt="article-img" className={cls.img} />
                        {textBlock && (
                            <ArticleTextBlockComponent block={{ ...textBlock, title: '' }} className={cls.textBlock} />
                        )}
                    </div>
                    <div className={cls.footer}>
                        <a
                            href={RoutePath.article_details + article.id}
                            target={target}
                        >
                            <Button
                                theme={ButtonTheme.BACKGROUND_INVERTED}
                                className={cls.Btn}
                            >
                                {t('Read more')}
                            </Button>
                        </a>
                        <div className={cls.views}>
                            {views}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <img alt="articleImg" src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.data} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </AppLink>
    );
});
