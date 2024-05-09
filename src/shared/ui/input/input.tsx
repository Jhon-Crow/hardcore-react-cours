import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, 'value' | 'onChange'>
// исключаем val и onCh

interface inputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: inputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                className={classNames(cls.Input, {}, [className])}
                type={type}
                value={value}
                onChange={onChangeHandler}
            />
        </div>

    );
});
