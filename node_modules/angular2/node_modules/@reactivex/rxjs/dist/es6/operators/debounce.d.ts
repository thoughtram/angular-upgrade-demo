import Scheduler from '../Scheduler';
import Observable from '../Observable';
export default function debounce<T>(dueTime: number, scheduler?: Scheduler): Observable<T>;
