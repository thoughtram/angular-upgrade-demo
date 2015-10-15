import Observable from '../Observable';
export default function combineLatest<T, R>(...observables: (Observable<any> | ((...values: Array<any>) => R))[]): Observable<R>;
