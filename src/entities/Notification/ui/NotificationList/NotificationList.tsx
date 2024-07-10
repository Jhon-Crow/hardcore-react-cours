import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NotificationListItem } from '../NotificationListItem/NotificationListItem';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const {
        className,
    } = props;

    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="1.2rem"
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border=".4rem" height="4.3rem" />
                <Skeleton width="100%" border=".4rem" height="4.3rem" />
                <Skeleton width="100%" border=".4rem" height="4.3rem" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="1.2rem"
            className={classNames('', {}, [className])}
        >
            {data?.map((item) => (
                <NotificationListItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
