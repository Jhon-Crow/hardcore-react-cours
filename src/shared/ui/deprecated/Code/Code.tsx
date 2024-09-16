import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg?react';
import { Button, ButtonTheme } from '../../ui/Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: string;
}

/**
 * @deprecated
 */
export const Code = memo((props: CodeProps) => {
    const { className, children } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(children);
    }, [children]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code className={cls.codeChildren}>{children}</code>
        </pre>
    );
});