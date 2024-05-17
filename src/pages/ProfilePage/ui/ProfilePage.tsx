import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE PAGE')}
        </div>
    );
};

export default ProfilePage;
