import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-dual-ring', {}, [className])}>
        <div />
    </div>
);