import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

/* eslint-disable i18next/no-literal-string */

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <RatingCard
                title="Как вам статья?"
                hasFeedback
                feedbackTitle="Оставльте свой отзыв!"
            />
            {/* <StarRating size={50} /> */}
            {/* <BugButton /> */}
            {t('Главная страница')}
            {/* <Counter /> */}
            {/* eslint-disable-next-line no-irregular-whitespace */}
            {/* <Input placeholder=" " /> */}
        </Page>
    );
};

export default MainPage;
