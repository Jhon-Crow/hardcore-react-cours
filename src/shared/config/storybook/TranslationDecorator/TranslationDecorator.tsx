import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import React, { Suspense } from 'react';

export const TranslationDecorator = (StoryComponent: React.FC) => (
    <I18nextProvider i18n={i18nForTest}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
);
