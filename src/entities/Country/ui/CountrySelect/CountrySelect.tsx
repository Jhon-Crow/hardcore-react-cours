import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const CountryList = [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Kazahstan, content: Country.Kazahstan },
        { value: Country.Armenia, content: Country.Armenia },
    ];

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            value={value}
            onChange={onChangeHandler}
            items={CountryList}
            readonly={readonly}
            direction="top"
        />

    // <Select
    //     lable={t('Укажите страну')}
    //     options={CountryList}
    //     value={value}
    //     onChange={onChangeHandler}
    //     className={classNames('', {}, [className])}
    //     readonly={readonly}
    // />
    );
});
