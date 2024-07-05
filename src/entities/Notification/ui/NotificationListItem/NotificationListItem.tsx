import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationListItem.module.scss';

interface NotificationListItemProps {
    className?: string;
    item: Notification;
}

export const NotificationListItem = memo((props: NotificationListItemProps) => {
    const {
        className,
        item,
    } = props;

    const content = (
        <Card
            theme={CardTheme.NORMAL}
            className={classNames(cls.NotificationListItem, {}, [className])}
        >
            <Text
                className={cls.link}
                title={item.title}
                text={item.description}
            />
        </Card>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
