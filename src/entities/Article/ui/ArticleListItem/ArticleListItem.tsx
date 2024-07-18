import { useTranslation } from 'react-i18next';
import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleView, ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg?react';
import { getRouteArticleDetails, getRouteProfile } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

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
                        <AppLink
                            className={cls.header}
                            to={getRouteProfile(article.user.id)}
                        >
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} />
                        </AppLink>
                        <Text text={article.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <div className={cls.mainWrapper}>
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            src={article.img}
                            /* eslint-disable-next-line i18next/no-literal-string */
                            alt="article-img"
                            className={cls.img}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent block={{ ...textBlock, title: '' }} className={cls.textBlock} />
                        )}
                    </div>
                    <div className={cls.footer}>
                        <a
                            href={getRouteArticleDetails(article.id)}
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
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        /* eslint-disable-next-line i18next/no-literal-string */
                        alt="articleImg"
                        src={article.img}
                        className={cls.img}
                    />
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
