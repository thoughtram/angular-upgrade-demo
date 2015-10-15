import Observable from '../Observable';
export default function expand<T>(project: (x: T, ix: number) => Observable<any>): Observable<any>;
