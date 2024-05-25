import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading, Profile,
    ProfileCard,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const {
        className,
    } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
