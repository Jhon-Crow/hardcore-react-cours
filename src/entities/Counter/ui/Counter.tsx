import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounter/getCounter';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement, add } = useCounterActions();
    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };
    const addFiveHandler = () => {
        add(5);
    };

    return (
        <div>
            {/* eslint-disable i18next/no-literal-string */}
            <h1 data-testid="value-title">
                value=
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={incrementHandler}>
                increment
            </Button>
            <Button onClick={addFiveHandler}>add5</Button>
            <Button data-testid="decrement-btn" onClick={decrementHandler}>
                decrement
            </Button>
        </div>
        // i18n-enable
    );
};
