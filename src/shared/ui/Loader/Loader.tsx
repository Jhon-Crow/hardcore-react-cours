import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import React from 'react';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-dual-ring', {}, [className])}>
        <div />
    </div>
);
