import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/ui/Page';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            {t('У вас нет необходимой роли')}
        </Page>
    );
};

export default ForbiddenPage;
