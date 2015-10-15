import Observable from '../Observable';
import Observer from '../Observer';
export default class ForkJoinObservable<T> extends Observable<T> {
    private observables;
    constructor(observables: Observable<any>[]);
    static create<R>(...observables: Observable<any>[]): Observable<R>;
    _subscribe(subscriber: Observer<any>): void;
}
