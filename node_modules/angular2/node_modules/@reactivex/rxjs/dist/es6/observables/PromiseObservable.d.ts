import Observable from '../Observable';
import Subscriber from '../Subscriber';
import Scheduler from '../Scheduler';
import Subscription from '../Subscription';
export default class PromiseObservable<T> extends Observable<T> {
    private promise;
    private scheduler;
    _isScalar: boolean;
    value: T;
    static create<T>(promise: Promise<T>, scheduler?: Scheduler): PromiseObservable<T>;
    constructor(promise: Promise<T>, scheduler: Scheduler);
    _subscribe(subscriber: Subscriber<T>): Subscription<{}>;
}
