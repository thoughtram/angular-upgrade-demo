import Operator from '../Operator';
import Observer from '../Observer';
import Observable from '../Observable';
import Subscriber from '../Subscriber';
import { FlatMapSubscriber } from './flatMap-support';
export declare class FlatMapToOperator<T, R> implements Operator<T, R> {
    observable: Observable<any>;
    projectResult: (x: T, y: any, ix: number, iy: number) => R;
    concurrent: number;
    constructor(observable: Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number);
    call(subscriber: Subscriber<R>): Subscriber<T>;
}
export declare class FlatMapToSubscriber<T, R> extends FlatMapSubscriber<T, R> {
    observable: Observable<T>;
    constructor(destination: Observer<R>, concurrent: number, observable: Observable<T>, projectResult?: (x: T, y: any, ix: number, iy: number) => R);
    _project(value: any, index: any): Observable<T>;
}
