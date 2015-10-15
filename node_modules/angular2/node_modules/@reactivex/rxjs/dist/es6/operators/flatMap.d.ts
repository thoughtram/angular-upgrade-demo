import Observable from '../Observable';
export default function flatMap<T, R>(project: (x: T, ix: number) => Observable<any>, projectResult?: (x: T, y: any, ix: number, iy: number) => R, concurrent?: number): any;
