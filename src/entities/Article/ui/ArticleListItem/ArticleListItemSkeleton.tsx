import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton border="50%" height={30} width={30} />
                            <Skeleton height={16} width={150} />
                            <Skeleton height={16} width={150} />
                        </div>
                        <Skeleton
                            height={24}
                            width={250}
                            className={cls.title}
                        />
                        <div className={cls.mainWrapper}>
                            <Skeleton height={200} className={cls.img} />
                        </div>
                        <div className={cls.footer}>
                            <Skeleton
                                height={36}
                                width={200}
                                className={cls.Btn}
                            />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton className={cls.title} width={150} height={16} />
                </Card>
            </div>
        );
    },
);
