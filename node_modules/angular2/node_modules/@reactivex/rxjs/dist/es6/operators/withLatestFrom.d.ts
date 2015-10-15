import Observable from '../Observable';
export default function withLatestFrom<R>(...args: (Observable<any> | ((...values: any[]) => Observable<R>))[]): Observable<R>;
