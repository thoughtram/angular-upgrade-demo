import Observable from '../Observable';
export default function merge<R>(...observables: (Observable<any> | number)[]): Observable<R>;
