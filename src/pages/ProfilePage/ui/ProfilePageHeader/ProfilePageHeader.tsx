import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import React from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            <Button theme={ButtonTheme.BACKGROUND}>
                {t('Редактировать')}
            </Button>
        </div>
    );
};
