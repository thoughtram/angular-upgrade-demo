import Observable from '../Observable';
export default function switchLatest<T, R>(project: (x: T, ix: number) => Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R): Observable<R>;
