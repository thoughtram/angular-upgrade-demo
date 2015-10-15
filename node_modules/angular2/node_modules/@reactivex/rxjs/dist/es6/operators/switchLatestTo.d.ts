import Observable from '../Observable';
export default function switchLatestTo<T, R>(observable: Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R): Observable<R>;
