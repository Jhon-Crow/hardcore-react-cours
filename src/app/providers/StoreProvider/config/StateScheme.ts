import { CounterScheme } from 'entities/Counter';
import { UserSheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';

export interface StateScheme {
    counter: CounterScheme;
    user: UserSheme;

    // Асинхронные редюсеры.
    loginForm?: LoginScheme;
}

export type StateSchemaKey = keyof StateScheme;
