import Observable from '../Observable';
export default class DeferObservable<T> extends Observable<T> {
    static create<T>(observableFactory: any): DeferObservable<{}>;
    observableFactory: () => Observable<T>;
    constructor(observableFactory: any);
    _subscribe(subscriber: any): void;
}
