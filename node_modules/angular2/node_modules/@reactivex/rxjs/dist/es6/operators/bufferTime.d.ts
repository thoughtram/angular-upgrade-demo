import Observable from '../Observable';
import Scheduler from '../Scheduler';
export default function bufferTime<T>(bufferTimeSpan: number, bufferCreationInterval?: number, scheduler?: Scheduler): Observable<T[]>;
