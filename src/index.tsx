import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider/index';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider/index';
import React from 'react';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден. Не удаётся вмонтировать реакт приложение');
}

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
