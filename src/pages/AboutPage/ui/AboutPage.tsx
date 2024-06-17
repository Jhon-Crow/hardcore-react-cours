import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';
import {ArticlesPage} from "pages/ArticlesPage";

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('О сайте')}
            <ArticlesPage/>
        </Page>
    );
};

export default AboutPage;
