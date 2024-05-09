import { CounterScheme } from 'entities/Counter';
import { UserSheme } from 'entities/User';

export interface StateScheme {
    counter: CounterScheme;
    user: UserSheme;
}
