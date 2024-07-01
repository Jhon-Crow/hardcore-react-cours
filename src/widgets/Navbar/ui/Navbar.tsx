import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {
    getUserAuthData, isUserAdmin, isUserChiefEditor, userActions,
} from '../../../entities/User/index';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const ChiefEditor = useSelector(isUserChiefEditor);

    const onClosModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const showModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || ChiefEditor;

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.INVERTED}
                    size={TextSize.M}
                    className={cls.appTitle}
                    title={t('Avangard214 App')}
                />
                <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    direction="bottom-right"
                    className={cls.dropDown}
                    borderlessTrigger
                    items={[
                        ...(isAdminPanelAvailable
                            ? [{ content: t('Админ панель'), href: RoutePath.admin_panel }]
                            : []),
                        { content: t('Профиль'), href: RoutePath.profile + authData.id },
                        { content: t('Выйти'), onClick: onLogout },
                    ]}
                    trigger={<Avatar radius={20} size={42} src={authData.avatar} />}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.INVERTED}
                size={TextSize.M}
                className={cls.appTitle}
                title={t('Avangard214 App')}
            />
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={showModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {isOpen && (
                <LoginModal
                    isOpen={isOpen}
                    onClose={onClosModal}
                />
            )}
        </header>
    );
};
