/* eslint-disable */
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './BugButton.module.scss';

interface BugButtonProps {
    className?: string;
}

// Компонент для теста ошибки
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const throwError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            onClick={throwError}
            className={classNames(cls.BugButton, {}, [className])}
        >
            Throw Error
        </Button>
    );
};
