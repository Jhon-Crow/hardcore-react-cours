import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
}

export const Code = memo((props: CodeProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Code, {}, [className])}>
            /
        </div>
    );
});
