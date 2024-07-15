import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { HStack } from '@/shared/ui/Stack';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
