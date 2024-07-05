import React, { memo } from 'react';
import { HPopover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    return (
        <HPopover
            // className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom-left"
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon inverted Svg={NotificationIcon} />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </HPopover>
    );
});
