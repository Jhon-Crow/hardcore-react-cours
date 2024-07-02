import { StateScheme } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '../consts/userConsts';

export const getUserRoles = (state: StateScheme) => state.user.authData?.roles;
export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserChiefEditor = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.CHIEF_EDITOR)),
);
