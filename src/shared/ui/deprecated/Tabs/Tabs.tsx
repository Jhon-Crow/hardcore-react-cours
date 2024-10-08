import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

/**
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabClick, value } = props;

    const clickHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={
                        tab.value === value
                            ? cls.selectedTab
                            : cls.notSelectedTab
                    }
                    theme={
                        tab.value === value
                            ? CardTheme.OUTLINED
                            : CardTheme.NORMAL
                    }
                    key={tab.value}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});