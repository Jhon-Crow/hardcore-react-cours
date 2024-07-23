import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { Card } from "@/shared/ui/Card";

/* eslint-disable i18next/no-literal-string */

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid="MainPage">
            <Card>{t('Главная страница')}</Card>
            {/* <ToggleFeatures */}
            {/*    feature="isMainPageTestComponentsEnabled" */}
            {/*    on={ */}
            {/*        <> */}
            {/* <Counter /> <StarRating size={50} /> */}
            {/*        </> */}
            {/*    } */}
            {/*    off={<Card>{t('Главная страница')}</Card>} */}
            {/* /> */}
        </Page>
    );
};

export default MainPage;