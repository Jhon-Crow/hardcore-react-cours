import React from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/ui/Page';
import { EditableProfileCard } from '@/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import cls from './ProfilePage.module.scss';
import { ProfileRating } from '@/features/profileRating';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{ id: string}>();

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <EditableProfileCard id={id} />
            <ProfileRating profileId={id} />
        </Page>
    );
};

export default ProfilePage;
