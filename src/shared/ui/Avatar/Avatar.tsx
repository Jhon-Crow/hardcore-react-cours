import React, { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import AvatarImg from '../../assets/icons/user-32-32.png';

import cls from './Avatar.module.scss';

interface TextProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    radius?: number;
}

export const Avatar = memo((props: TextProps) => {
    const {
        className,
        src = AvatarImg,
        alt,
        size,
        radius,
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
        borderRadius: radius,
    }), [size, radius]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
});
