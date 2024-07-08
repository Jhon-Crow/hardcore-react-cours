import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useSpring, animated, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const screenHeight = window.innerHeight;

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        isOpen,
        onClose,
        children,
        lazy,
    } = props;

    const { theme } = useTheme();

    const [{ y }, api] = useSpring(() => ({ y: screenHeight }));

    useEffect(() => {
        if (isOpen) {
            api.start({ y: 0 });
        }
    }, [isOpen, api]);

    const close = useCallback((velocity = 0) => {
        api.start({
            y: screenHeight,
            immediate: false,
            config: { ...config.stiff, velocity },
            onRest: onClose,
        });
    }, [api, onClose]);

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const bind = useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > screenHeight * 0.5 || (vy > 3 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    );

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: !isOpen,
    };

    if (lazy && !isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <animated.div
                    {...bind()}
                    style={{ y }}
                    className={cls.content}
                >
                    {children}
                </animated.div>
            </div>
        </Portal>
    );
});
