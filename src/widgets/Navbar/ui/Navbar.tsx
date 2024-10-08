import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getUserAuthData } from '../../../entities/User/index';
import cls from './Navbar.module.scss';
import { getRouteCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onClosModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const showModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    // <ToggleFeatures
    //     feature="isNavbarArticleCreateLinkEnabled"
    //     on={
    //         <AppLink to={getRouteCreate()} theme={AppLinkTheme.SECONDARY}>
    //             {t('Создать статью')}
    //         </AppLink>
    //     }
    //     off={<></>}
    // />;

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack gap=".4rem" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <Text
                            className={cls.appName}
                            title={t('Avangard214 App')}
                            theme={TextTheme.INVERTED}
                        />
                        <ToggleFeatures
                            feature="isNavbarArticleCreateLinkEnabled"
                            on={
                                <AppLink
                                    to={getRouteCreate()}
                                    theme={AppLinkTheme.SECONDARY}
                                >
                                    {t('Создать статью')}
                                </AppLink>
                            }
                            off={<></>}
                        />
                        <HStack max={false} gap=".4rem" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
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
            {isOpen && <LoginModal isOpen={isOpen} onClose={onClosModal} />}
        </header>
    );
};