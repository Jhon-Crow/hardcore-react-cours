import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { HPopover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    // const onOpenDrawer = useCallback(() => {
    //     setIsOpen(true);
    // }, []);
    //
    // const onCloseDrawer = useCallback(() => {
    //     setIsOpen(false);
    // }, []);

    const onOpenDrawerSwitch = useCallback(() => {
        console.log('onOpenSwitcher');
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
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onOpenDrawerSwitch}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});
