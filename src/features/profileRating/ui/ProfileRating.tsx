import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetProfileRating, useRateProfile } from '../api/profileRatingApi';
import { getProfileData } from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { t } = useTranslation();
    const {
        className,
        profileId,
    } = props;

    const userData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = userData?.id === profileData?.id;
    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const rating = data?.[0];

    const handleRateProfile = useCallback((starsCount: number, feedback?:string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    if (canEdit) {
        return null;
    }

    if (isLoading && !canEdit) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте отзыв о профиле')}
            hasFeedback
        />
    );
});
export default ProfileRating;
