import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox, Dropdown } from '@/shared/ui/Popups';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            {t('О сайте')}
            {/* <HStack> */}
            <ListBox
                defaultValue="Listbox"
                onChange={(value: string) => {}}
                value={undefined}
                items={[
                    { value: '1', content: '123' },
                    { value: '2', content: 'jghhj', disabled: true },
                    { value: '3', content: '333333' },
                ]}

            />
            <Dropdown
                trigger="Dropdown"
                // onChange={(value: string) => {}}
                items={[
                    { content: '1111111' },
                    { content: '2222222', disabled: true },
                    { content: '3333333' },
                ]}

            />
            {/* </HStack> */}
        </Page>
    );
};

export default AboutPage;
