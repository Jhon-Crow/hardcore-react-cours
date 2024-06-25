import { Menu } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './Dropdown.module.scss';

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
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        readonly,
        borderlessTrigger = false,
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.borderlessTrigger]: borderlessTrigger,
    };

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button
                className={classNames(cls.btn, mods, [className])}
                disabled={readonly}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items className={cls.menu}>
                {items.map((item: DropdownItem) => (
                    <Menu.Item as={Fragment} disabled={item.disabled}>
                        {({ active }) => (
                            <Button
                                onClick={item.onClick}
                                className={classNames(cls.Item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                })}
                            >
                                {item.content}
                            </Button>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
}
