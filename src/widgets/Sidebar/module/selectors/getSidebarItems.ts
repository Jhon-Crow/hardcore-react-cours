import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main.svg?react';
import AboutIcon from '@/shared/assets/icons/about.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg?react';
import { SidebarItemType } from '../../module/types/sidebar';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте',
            },

        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
