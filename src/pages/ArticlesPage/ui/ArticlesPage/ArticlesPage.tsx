import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('article');

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('ARTICLES PAGE')}
        </div>
    );
};

export default memo(ArticlesPage);
