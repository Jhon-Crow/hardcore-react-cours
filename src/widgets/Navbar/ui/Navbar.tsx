import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {t('Войти')}
                </Button>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(!isOpen)}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, deserunt inventore obcaecati optio quae, qui rem, rerum sapiente tenetur vero voluptatibus voluptatum? Amet corporis esse maxime numquam vitae! Aperiam commodi debitis distinctio eaque expedita explicabo impedit minus mollitia, officiis quod repudiandae, sequi. Aut blanditiis, enim ipsa itaque nobis quidem.
            </Modal>
        </div>
    );
};
