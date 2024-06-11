import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/input';
import { Page } from 'widgets/Page/ui/Page';
import { Counter } from '../../../entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {/* <BugButton /> */}
            {t('Главная страница')}
            {/* <Counter /> */}
            {/* eslint-disable-next-line no-irregular-whitespace */}
            {/* <Input placeholder=" " /> */}
        </Page>
    );
};

export default MainPage;
