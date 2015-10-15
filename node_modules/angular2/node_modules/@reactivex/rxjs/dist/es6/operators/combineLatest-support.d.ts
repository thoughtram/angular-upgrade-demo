import Operator from '../Operator';
import Observer from '../Observer';
import Observable from '../Observable';
import Subscriber from '../Subscriber';
import { ZipSubscriber, ZipInnerSubscriber } from './zip-support';
export declare function combineLatest<T, R>(...observables: (Observable<any> | ((...values: Array<any>) => R))[]): Observable<R>;
export declare function combineLatestProto<R>(...observables: (Observable<any> | ((...values: any[]) => R))[]): Observable<R>;
export declare class CombineLatestOperator<T, R> implements Operator<T, R> {
    project: (...values: Array<any>) => R;
    constructor(project?: (...values: Array<any>) => R);
    call(subscriber: Subscriber<R>): Subscriber<T>;
}
export declare class CombineLatestSubscriber<T, R> extends ZipSubscriber<T, R> {
    project: (...values: Array<any>) => R;
    limit: number;
    constructor(destination: Observer<R>, project?: (...values: Array<any>) => R);
    _subscribeInner(observable: any, values: any, index: any, total: any): any;
    _innerComplete(innerSubscriber: any): void;
}
export declare class CombineLatestInnerSubscriber<T, R> extends ZipInnerSubscriber<T, R> {
    constructor(destination: Observer<T>, parent: ZipSubscriber<T, R>, values: any, index: number, total: number);
    _next(x: any): void;
}
