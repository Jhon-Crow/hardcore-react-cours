import { useSelector } from 'react-redux';
import { StateScheme } from '@/app/providers/StoreProvider';

type Selector<T, Args extends any[]> = (state: StateScheme, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Recult<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>,
): Recult<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) =>
        useSelector((state: StateScheme) => selector(state, ...args));

    return [useSelectorHook, selector];
}