import React, { memo, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg?react';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 10, selectedStars = 0 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => {
                const mods: Mods = {
                    [cls.hovered]: currentStarsCount >= starNumber,
                    [cls.selected]: isSelected,
                };

                return (
                    <Icon
                        onMouseEnter={onHover(starNumber)}
                        onMouseLeave={onLeave}
                        onClick={onClick(starNumber)}
                        className={classNames(cls.starIcon, mods, [])}
                        Svg={StarIcon}
                        key={starNumber}
                        width={size}
                        height={size}
                        data-testid={`StarRating.${starNumber}`}
                        data-selected={currentStarsCount >= starNumber}
                    />
                );
            })}
        </div>
    );
});
