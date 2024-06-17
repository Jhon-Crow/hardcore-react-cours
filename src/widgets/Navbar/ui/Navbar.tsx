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
import { getUserAuthData, userActions } from '../../../entities/User/index';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onClosModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const showModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
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
