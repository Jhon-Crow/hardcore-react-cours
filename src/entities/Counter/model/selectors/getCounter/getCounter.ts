import { buildSelector } from '@/shared/lib/store';

export const [useCounterValue, getCounter] = buildSelector((state) => state.counter.value);
