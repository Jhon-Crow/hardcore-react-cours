import React, { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'column' | 'row';
// eslint-disable-next-line max-len
export type FlexGap =
    '.2rem'
    | '.4rem'
    | '.8rem'
    | '1rem'
    | '1.2rem'
    | '1.4rem'
    | '1.8rem'
    | '2rem'
    | '2.2rem'
    | '2.4rem'
    | '2.8rem'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    end: cls.justifyEnd,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    '.2rem': cls.gap02,
    '.4rem': cls.gap04,
    '.8rem': cls.gap08,
    '1rem': cls.gap10,
    '1.2rem': cls.gap12,
    '1.4rem': cls.gap14,
    '1.8rem': cls.gap18,
    '2rem': cls.gap20,
    '2.2rem': cls.gap22,
    '2.4rem': cls.gap24,
    '2.8rem': cls.gap28,
};

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap = '.4rem',
        max = true,
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
