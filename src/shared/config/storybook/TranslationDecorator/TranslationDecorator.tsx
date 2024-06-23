import { I18nextProvider } from 'react-i18next';
import React, { Suspense } from 'react';
import i18nForTest from '../../i18n/i18nForTest';

export const TranslationDecorator = (StoryComponent: React.FC) => (
    <I18nextProvider i18n={i18nForTest}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
);
