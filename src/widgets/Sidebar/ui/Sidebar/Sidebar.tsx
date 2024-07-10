import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { getSidebarItems } from '../../module/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    const ItemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [sidebarItemsList, collapsed]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.sidebarWrapper}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    square
                    size={ButtonSize.XL}
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cls.collapsedBtn}
                >
                    {collapsed ? '>' : '<'}
                </Button>
                <VStack role="navigation" gap="1.4rem" className={cls.linkItems}>
                    {ItemsList}
                </VStack>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher
                        short={collapsed}
                    />
                </div>
            </div>
        </aside>
    );
});
