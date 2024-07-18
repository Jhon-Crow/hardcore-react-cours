import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData,
    isUserAdmin,
    isUserChiefEditor,
    userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const ChiefEditor = useSelector(isUserChiefEditor);
    const authData = useSelector(getUserAuthData);

    const {
        className,
    } = props;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || ChiefEditor;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom-left"
            borderlessTrigger
            items={[
                ...(isAdminPanelAvailable
                    ? [{ content: t('Админ панель'), href: getRouteAdminPanel() }]
                    : []),
                { content: t('Профиль'), href: getRouteProfile(authData.id) },
                { content: t('Выйти'), onClick: onLogout },
            ]}
            trigger={<Avatar radius={20} size={42} src={authData.avatar} />}
        />
    );
});
