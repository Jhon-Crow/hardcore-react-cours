import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { HPopover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg?react';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawerSwitch = useCallback(() => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [isOpen]);

    const trigger = (
        <Button onClick={onOpenDrawerSwitch} theme={ButtonTheme.CLEAR}>
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    );
    return (
        <div>
            <BrowserView>
                <HPopover
                    // className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom-left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </HPopover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onOpenDrawerSwitch}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
