import { useSelector } from 'react-redux';
import { StateScheme } from '@/app/providers/StoreProvider';

type Selector<T> = (state: StateScheme) => T;
type Recult<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Recult<T> {
    const useSelectorHook = () => useSelector(selector);
    return [useSelectorHook, selector];
}
