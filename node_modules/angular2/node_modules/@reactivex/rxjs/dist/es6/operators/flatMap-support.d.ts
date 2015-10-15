import Operator from '../Operator';
import Observer from '../Observer';
import Observable from '../Observable';
import Subscriber from '../Subscriber';
import { MergeSubscriber, MergeInnerSubscriber } from './merge-support';
export declare class FlatMapOperator<T, R> implements Operator<T, R> {
    project: (x: T, ix: number) => Observable<any>;
    projectResult: (x: T, y: any, ix: number, iy: number) => R;
    concurrent: number;
    constructor(project: (x: T, ix: number) => Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number);
    call(subscriber: Subscriber<R>): Subscriber<T>;
}
export declare class FlatMapSubscriber<T, R> extends MergeSubscriber<T, R> {
    project: (x: T, ix: number) => Observable<any>;
    projectResult: (x: T, y: any, ix: number, iy: number) => R;
    constructor(destination: Observer<R>, concurrent: number, project: (x: T, ix: number) => Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R);
    _project(value: any, index: any): any;
    _subscribeInner(observable: Observable<T>, value: any, index: any): any;
}
export declare class FlatMapInnerSubscriber<T, R> extends MergeInnerSubscriber<T, R> {
    value: any;
    index: number;
    project: (x: T, y: any, ix: number, iy: number) => R;
    count: number;
    constructor(destination: Observer<T>, parent: FlatMapSubscriber<T, R>, value: any, index: number, project?: (x: T, y: any, ix: number, iy: number) => R);
    _next(value: any): void;
}
