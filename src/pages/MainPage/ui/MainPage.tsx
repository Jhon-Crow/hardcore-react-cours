import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { RatingCard } from "@/entities/Rating";
import { getFeatureFlag } from "@/shared/lib/features";
import { Counter } from "@/entities/Counter";

/* eslint-disable i18next/no-literal-string */

const MainPage = () => {
    const { t } = useTranslation('main');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    return (
        <Page data-testid="MainPage">
            {isCounterEnabled && <Counter />}
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
