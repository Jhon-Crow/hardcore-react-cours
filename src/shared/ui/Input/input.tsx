import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useState, useRef,
} from 'react';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, 'value' | 'onChange' | 'readOnly'>
// исключаем val и onCh

interface inputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: inputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement | null>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            if (ref.current) ref.current.focus();
        }
    }, [autofocus]);

    const onFocuseHandler = () => setIsFocused(true);
    const onBlurHandler = () => setIsFocused(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div
            className={classNames(cls.InputWrapper, mods, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    onFocus={onFocuseHandler}
                    onBlur={onBlurHandler}
                    className={classNames(cls.Input, {}, [className])}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelectHandler}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isFocused
                    && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 8.6}px` }}
                        />
                    )}
            </div>
        </div>
    );
});
