import React, { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { HStack } from '../../ui/Stack';
import cls from './ListBox.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'top',
        label,
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const Classes = [mapDirectionClass[direction]];

    return (
        <HStack
            className={classNames('', mods, [className])}
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
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
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
