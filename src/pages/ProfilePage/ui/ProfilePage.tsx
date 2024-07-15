import React from 'react';
import { useParams } from 'react-router-dom';
import { Project } from 'ts-morph';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/ui/Page';
import { EditableProfileCard } from '@/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import cls from './ProfilePage.module.scss';
import { ProfileRating } from '@/features/profileRating';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const { id } = useParams<{ id: string}>();

    if (!id) {
        return (
            <Text title={t('Профиль не найдет')} />
        );
    }

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <EditableProfileCard id={id} />
            <ProfileRating profileId={id} />
        </Page>
    );
};

export default ProfilePage;
