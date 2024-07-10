import React, { ReactNode } from 'react';
import { Popover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function HPopover(props: PopoverProps) {
    const {
        children,
        className,
        trigger,
        direction = 'bottom-left',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    // const mods: Mods = {
    //     [popupCls.readonly]: readonly,
    //     [cls.borderlessTrigger]: borderlessTrigger,
    // };

    return (
        <Popover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <Popover.Button
                as="div"
                className={classNames(
                    cls.btn,
                    // mods,
                    {},
                    [className],
                )}

            >
                {trigger}
            </Popover.Button>

            <Popover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </Popover.Panel>
        </Popover>
    );
}
