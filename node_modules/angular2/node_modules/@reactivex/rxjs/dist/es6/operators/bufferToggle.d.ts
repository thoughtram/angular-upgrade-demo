import Observable from '../Observable';
export default function bufferToggle<T, O>(openings: Observable<O>, closingSelector: (openValue: O) => Observable<any>): Observable<T[]>;
