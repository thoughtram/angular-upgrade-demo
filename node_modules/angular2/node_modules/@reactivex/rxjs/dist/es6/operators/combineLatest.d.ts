import Observable from '../Observable';
export default function combineLatest<R>(...observables: (Observable<any> | ((...values: any[]) => R))[]): Observable<R>;
