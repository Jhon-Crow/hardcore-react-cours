import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import cls from './StoreProvider.module.scss';

interface StoreProviderProps {
    cildren?: ReactNode;
}

export const StoreProvider = ({ cildren }: StoreProviderProps) => {
    const store = createReduxStore();

    return (
        <Provider store={store}>
            {cildren}
        </Provider>
    );
};
