import React, { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import cls from './ListBox.module.scss';
import { Button, ButtonTheme } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

// const mapDirectionClass: Record<DropdownDirection, string> = {
//     'bottom-left': cls.optionsBottomLeft,
//     'bottom-right': cls.optionsBottomRight,
//     'top-left': cls.optionsTopLeft,
//     'top-right': cls.optionsTopRight,
// };

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'top-right',
        label,
    } = props;

    const mods: Mods = {
        [popupCls.readonly]: readonly,
    };

    const Classes = [mapDirectionClass[direction]];

    return (
        <HStack
            className={classNames('', mods, [className, popupCls.popup])}
        >
            {label && <span>{`${label}> `}</span>}
            <Listbox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, mods, [className])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button
                    className={cls.selectBtn}
                >
                    <Button
                        theme={ButtonTheme.CLEAR}
                    >
                        {value ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options
                    className={classNames(cls.options, {}, Classes)}
                >
                    {items?.map((item: ListBoxItem) => (
                        <Listbox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.optionItem,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!'}
                                    {item.content}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    );
}
