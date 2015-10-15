import Observable from '../Observable';
export default function flatMapTo<T, R>(observable: Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number): any;
