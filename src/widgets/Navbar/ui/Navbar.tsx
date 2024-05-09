import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const onClosModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const showModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={showModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            <LoginModal
                isOpen={isOpen}
                onClose={onClosModal}
            />
        </div>
    );
};
