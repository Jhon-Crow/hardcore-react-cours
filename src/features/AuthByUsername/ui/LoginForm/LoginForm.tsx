import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/input/input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                placeholder={t('Введите логин')}
                onChange={onChange}
                autofocus
            />
            <Input
                type="text"
                placeholder={t('Введите пароль')}
                onChange={onChange}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.Btn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
