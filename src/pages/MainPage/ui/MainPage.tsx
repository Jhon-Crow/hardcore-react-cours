import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { Counter } from "@/entities/Counter";
import { StarRating } from "@/shared/ui/StarRating";

/* eslint-disable i18next/no-literal-string */

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid="MainPage">
            <Counter />
            <StarRating size={50} />
            {/* <BugButton /> */}
            {t('Главная страница')}
            {/* <Counter /> */}
            {/* eslint-disable-next-line no-irregular-whitespace */}
            {/* <Input placeholder=" " /> */}
        </Page>
    );
};

export default MainPage;
