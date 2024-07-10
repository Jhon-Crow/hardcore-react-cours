import { Menu } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    readonly?: boolean;
    borderlessTrigger?: boolean;
    direction?: DropdownDirection;
}

// const mapDirectionClass: Record<DropdownDirection, string> = {
//     'bottom-left': cls.optionsBottomLeft,
//     'bottom-right': cls.optionsBottomRight,
//     'top-left': cls.optionsTopLeft,
//     'top-right': cls.optionsTopRight,
// };

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        readonly,
        borderlessTrigger = false,
        direction = 'bottom-left',
    } = props;

    const mods: Mods = {
        [popupCls.readonly]: readonly,
        [cls.borderlessTrigger]: borderlessTrigger,
    };

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
        >
            <Menu.Button
                className={classNames(cls.btn, mods, [className])}
                disabled={readonly}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, menuClasses)}
            >
                {items.map((item: DropdownItem) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.Item, {
                                [popupCls.active]: active,
                                [popupCls.disabled]: item.disabled,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
