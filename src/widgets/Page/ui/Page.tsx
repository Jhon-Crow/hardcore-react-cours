import React, {
    memo,
    MutableRefObject,
    ReactNode,
    UIEvent,
    useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateScheme } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfinitScroll/useInfinitScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { PositionSaverActions } from '../model/slices/PositionSaverSlice';
import cls from './Page.module.scss';
import { getScrollPositionByPath } from '../model/selectors/PositionSaverSelector';
import { TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';
import { getUserAuthData } from '@/entities/User';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const authData = useSelector(getUserAuthData);
    const scrollPosition = useSelector((state: StateScheme) =>
        getScrollPositionByPath(state, pathname),
    );
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            PositionSaverActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    // if (authData) {
    return (
        <main
            data-testid={props['data-testid'] ?? 'Page'}
            id={PAGE_ID}
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.PageRedesigned,
                    off: () => cls.Page,
                }),
                {},
                [className],
            )}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
    // }

    // return (
    //     <main
    //         data-testid={props['data-testid'] ?? 'Page'}
    //         id={PAGE_ID}
    //         onScroll={onScroll}
    //         ref={wrapperRef}
    //         className={classNames(cls.Page, {}, [className])}
    //     >
    //         {children}
    //         {onScrollEnd ? (
    //             <div className={cls.trigger} ref={triggerRef} />
    //         ) : null}
    //     </main>
    // );
});