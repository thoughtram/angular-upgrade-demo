import Operator from '../Operator';
import Observer from '../Observer';
import Observable from '../Observable';
import Subscriber from '../Subscriber';
export declare class ZipOperator<T, R> implements Operator<T, R> {
    project: (...values: Array<any>) => R;
    constructor(project?: (...values: Array<any>) => R);
    call(subscriber: Subscriber<R>): Subscriber<T>;
}
export declare class ZipSubscriber<T, R> extends Subscriber<T> {
    values: any;
    active: number;
    observables: Observable<any>[];
    project: (...values: Array<any>) => R;
    limit: number;
    constructor(destination: Observer<R>, project?: (...values: Array<any>) => R, values?: any);
    _next(observable: any): void;
    _complete(): void;
    _subscribeInner(observable: any, values: any, index: any, total: any): any;
    _innerComplete(innerSubscriber: any): void;
}
export declare class ZipInnerSubscriber<T, R> extends Subscriber<T> {
    parent: ZipSubscriber<T, R>;
    values: any;
    index: number;
    total: number;
    events: number;
    constructor(destination: Observer<T>, parent: ZipSubscriber<T, R>, values: any, index: number, total: number);
    _next(x: any): void;
    _projectNext(values: Array<any>, project?: (...xs: Array<any>) => R): void;
    _complete(): void;
}
export declare function mapValue(xs: any): any;
export declare function hasValue(xs: any): boolean;
