import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const CurrencyList = [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.USD, content: Currency.USD },
        { value: Currency.EUR, content: Currency.EUR },
    ];

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            value={value}
            onChange={onChangeHandler}
            items={CurrencyList}
            readonly={readonly}
            direction="top-right"
        />

    // <Select
    //     lable={t('Укажите валюту')}
    //     options={currencyList}
    //     value={value}
    //     onChange={onChangeHandler}
    //     className={classNames('', {}, [className])}
    //     readonly={readonly}
    // />
    );
});
