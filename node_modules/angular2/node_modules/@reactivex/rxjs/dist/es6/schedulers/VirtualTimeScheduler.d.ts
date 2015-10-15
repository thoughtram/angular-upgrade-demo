import Scheduler from '../Scheduler';
import Subscription from '../Subscription';
import Action from './Action';
export default class VirtualTimeScheduler implements Scheduler {
    actions: Action[];
    active: boolean;
    scheduled: boolean;
    index: number;
    sorted: boolean;
    frame: number;
    now(): number;
    sortActions(): void;
    flush(): void;
    schedule<T>(work: (x?: any) => Subscription<T> | void, delay?: number, state?: any): Subscription<T>;
}
