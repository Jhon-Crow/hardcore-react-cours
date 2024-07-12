import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
// import cls from './RatingCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { NotificationList } from '@/entities/Notification';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onCancel,
        onAccept,
        title,
        hasFeedback,
        feedbackTitle,
    } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [starsCount, setStarsCount] = useState(0);

    //    const mods: Mods = {
    //        [cls[theme]]: true,
    //        [cls.disabled]: disabled,
    //    };

    const modalToggle = useCallback(() => {
        setIsModalOpen(!isModalOpen);
    }, [isModalOpen]);

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            modalToggle();
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, modalToggle, onAccept]);

    const feedbackHandler = useCallback(() => {
        modalToggle();
        onAccept?.(starsCount, feedback);
    }, [feedback, modalToggle, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        modalToggle();
        onCancel?.(starsCount);
    }, [modalToggle, onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <div>
            <BrowserView>
                <Card className={classNames('', {}, [className])}>
                    <VStack
                        max={false}
                        align="center"
                        gap="1.2rem"
                    >
                        <Text title={title} />
                        <StarRating size={30} onSelect={onSelectStars} />
                    </VStack>
                    <Modal isOpen={isModalOpen} onClose={modalToggle}>
                        <VStack
                            gap="2.4rem"
                        >
                            {modalContent}
                            <HStack justify="between">
                                <Button
                                    onClick={cancelHandler}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    onClick={feedbackHandler}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                </Card>
            </BrowserView>

            <MobileView>
                <Card className={classNames('', {}, [className])}>
                    <VStack
                        max={false}
                        align="center"
                        gap="1.2rem"
                    >
                        <Text title={title} />
                        <StarRating size={30} onSelect={onSelectStars} />
                    </VStack>
                    <Drawer
                        isOpen={isModalOpen}
                        onClose={modalToggle}
                    >
                        <VStack
                            align="center"
                            gap="2.4rem"
                        >
                            {modalContent}
                            <HStack
                                max={false}
                            >
                                <Button
                                    onClick={feedbackHandler}
                                    theme={ButtonTheme.BACKGROUND}
                                >
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Drawer>
                </Card>
            </MobileView>
        </div>
    );
});
