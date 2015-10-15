import Operator from '../Operator';
import Subscriber from '../Subscriber';
import Observer from '../Observer';
import Observable from '../Observable';
import Subscription from '../Subscription';
export declare class MergeOperator<T, R> implements Operator<T, R> {
    concurrent: number;
    constructor(concurrent?: number);
    call(subscriber: Subscriber<R>): Subscriber<T>;
}
export declare class MergeSubscriber<T, R> extends Subscriber<T> {
    count: number;
    active: number;
    stopped: boolean;
    buffer: Observable<any>[];
    concurrent: number;
    constructor(destination: Observer<R>, concurrent: number);
    _next(value: any): void;
    complete(): void;
    _unsubscribe(): void;
    _project(value: any, index: any): any;
    _buffer(value: any): void;
    _subscribeInner(observable: Observable<any>, value: any, index: any): Subscription<any>;
    _innerComplete(): void;
}
export declare class MergeInnerSubscriber<T, R> extends Subscriber<T> {
    parent: MergeSubscriber<T, R>;
    constructor(destination: Observer<T>, parent: MergeSubscriber<T, R>);
    _complete(): void;
}
