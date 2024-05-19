import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/input';
import { Counter } from '../../../entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {/* <BugButton /> */}
            {t('Главная страница')}
            {/* <Counter /> */}
            <Input placeholder=" " />
        </div>
    );
};

export default MainPage;
