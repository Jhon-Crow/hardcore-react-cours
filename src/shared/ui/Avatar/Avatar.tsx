import React, { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import UserIcon from '../../assets/icons/user-filled.svg?react';
import cls from './Avatar.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Icon } from '@/shared/ui/Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    radius?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
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

    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;
    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
});
