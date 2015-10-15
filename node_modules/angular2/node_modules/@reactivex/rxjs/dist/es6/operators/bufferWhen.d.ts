import Observable from '../Observable';
export default function bufferWhen<T>(closingSelector: () => Observable<any>): Observable<T[]>;
